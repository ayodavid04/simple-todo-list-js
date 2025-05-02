// 1. Grab the input, button, and list elements from the HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Set up a click event on the "Add Task" button
addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim(); // Get and trim input

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // 3. Create a new <li> element with the task text
  const li = document.createElement('li');
  li.textContent = taskText;

  // 4. Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  // 5. Append the delete button to the list item
  li.appendChild(deleteBtn);

  // 6. Add the list item to the task list
  taskList.appendChild(li);

  // 7. Clear the input field
  taskInput.value = '';
});
