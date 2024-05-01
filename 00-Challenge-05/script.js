const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



function getTask () {
    const taskTitle = document.querySelector('#exampleModal input[name="task-title"]').value;
    const taskDate = document.querySelector('#exampleModal input[type="date"]').value;
    const taskDescription = document.querySelector('#exampleModal textarea').value;


    console.log(taskTitle)
    console.log(taskDate)
    console.log(taskDescription)
}
getTask()


// // Function to save task to local storage
// function saveTaskToLocalStorage() {
//     // Retrieve input values

//     // Create task object
//     const task = {
//         title: taskTitle,
//         date: taskDate,
//         description: taskDescription
//     };

//     // Retrieve existing tasks from local storage or initialize an empty array
//     const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     // Add new task to the array
//     existingTasks.push(task);

//     // Convert the array back to JSON string
//     const tasksJson = JSON.stringify(existingTasks);

//     // Save the JSON string to local storage
//     localStorage.setItem('tasks', tasksJson);
// }

// // Event listener for "Save changes" button click
// document.querySelector('#exampleModal .btn-primary').addEventListener('click', saveTaskToLocalStorage);
