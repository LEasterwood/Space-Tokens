
console.log("Hello World");






//keeps saying it is null??

const capsuleList = document.querySelector('#capsuleList'); // new li that will hopefully go to timeline.html

 // will be added to the capsule list on timeline.html
document.addEventListener('submit', function(e) {
    e.preventDefault();
    const capsuleForm = document.querySelector('#createNewForm');
    const capsuleName = capsuleForm.capsuleName.value;
    const unlockedDate = capsuleForm.unlockedDate.value;
    const description = capsuleForm.description.value;
    console.log("capsule created: " + capsuleName);
    console.log("unlock date: " + unlockedDate);
    console.log("description: " + description);
    submitCapsule(capsuleName);
    // const capsuleName = capsuleNameForm.value;
    // const newLI = document.createElement("LI");
    // newLI.innerText = capsuleName;
    // console.log(newLI);
    // capsuleList.append(newLI);

    // capsuleNameForm.value = "";
    // capsuleUnlockDate.value = "";
    // capsuleDescription.value = "";
})

//post to backend and then endpoint that i created

// fetchlocalhost:8080/api/capsules/new?capsuleName=

// const addCapsule = (capsuleName, unlockedDate, description) => {
//     const capsuleList = document.createElement("li");
//     const bTag = doocument.createElement('b');      // bold  the title
//     bTag.append(capsuleName)
//     capsuleList.append(bTag);
//     capsuleList.append(`-- ${unlockedDate}`);
//     capsuleList.append(`-- ${description}`);
//     capsuleList.append(capsuleList);
// }



// submitCapsule();

function submitCapsule(capsuleName) {

    //sending date to the backend
   fetch(`http://localhost:8080/api/capsules/new?capsuleName=${capsuleName}`, {
       method: 'POST',
       headers: {
          'Content-Type':  'application/json'
       }
   })
   .then(data => {
       // handle the response from the backend
       console.log(data);
   })
   .catch(error => {
       console.error('Error', error);
   });
}