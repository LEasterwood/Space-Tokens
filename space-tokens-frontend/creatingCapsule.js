
function submitCapsule() {
    
    var capsuleName = document.getElementById("capsuleName").value;
    var unlockDate = document.getElementById("unlockedDate").value;
    var description = document.getElementById("description").value;

    // sending date to the backend
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type':  'application/json'
        },
        body: JSON.stringify({ capsuleName: capsuleName, unlockDate: unlockDate, description: description })
    })

    .then(response => response.json())
    .then(data => {
        // handle the response from the backend
        console.log(data);
    })
    
    .catch(error => {
        console.error('Error', error);
    });
}