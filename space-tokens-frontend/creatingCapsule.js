console.log("Hello World");

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
    submitCapsule(capsuleName);     //anony
})

function submitCapsule(capsuleName, unlockedDate, description) {

    //sending date to the backend
   fetch(`http://localhost:8080/api/capsules/new?capsuleName=${capsuleName, unlockedDate, description}`, {
       method: 'POST',
       headers: {
          'Content-Type':  'application/json'
       }
   })
   .then(response => response.json())
   .then(data => {
       // handle the response from the backend
       if (data.ok) {
        alert('capsule created');
        window.location.replace("timeline.html");
       } else {
        console.error("Error", data.error);
       }
   })
   .catch(error => {
       console.error('Error', error);
   });
}