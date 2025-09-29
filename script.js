// Get necessary elements from the DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Event listener for the Add button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the new list item element
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 2. Append the new list item to the main list
    taskList.appendChild(listItem);

    // 3. Clear the input field
    taskInput.value = '';

    // 4. Add the event listener to the new delete button
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // BONUS: Add a click listener to mark the task as complete (optional styling needed)
    listItem.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            listItem.classList.toggle('completed'); // 'completed' class for CSS
        }
    });
}