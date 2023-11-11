console.log("Hello World");

//keeps saying it is null??


const capsuleForm = document.querySelector('#createNew');
const capsuleNameForm = document.querySelector('#capsuleName');
const capsuleUnlockDate = document.querySelector('#unlockedDate');
const capsuleDescription = document.querySelector('#description');
const capsuleList = document.querySelector('#capsuleList'); // new li that will hopefully go to timeline.html

 // will be added to the capsule list on timeline.html
capsuleForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("capsule created!")
    // const capsuleName = capsuleNameForm.value;
    // const newLI = document.createElement("LI");
    // newLI.innerText = capsuleName;
    // console.log(newLI);
    // capsuleList.append(newLI);

    // capsuleNameForm.value = "";
    // capsuleUnlockDate.value = "";
    // capsuleDescription.value = "";
})

// createNewForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert("capsule created!")
//     const capsuleName = (createNewForm.elements.capsuleName.value);
//     const unlockedDate = (createNewForm.elements.unlockedDate.value);
//     const description = (createNewForm.elements.description.value);
//     //const capsuleName = capsuleNameForm.value;

//     addCapsule(capsuleName, unlockedDate, description )
    
// })

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

// function submitCapsule() {

//     //sending date to the backend
//    fetch('localhost:8080/capsules/new?capsuleName=test-capsule', {
//        method: 'POST',
//        headers: {
//           'Content-Type':  'application/json'
//        }
//    })
//    .then(data => {
//        // handle the response from the backend
//        console.log(data);
//    })
//    .catch(error => {
//        console.error('Error', error);
//    });
// }