![Uploading Screenshot 2025-05-02 130133.png…]()
# simple-todo-list-js
A beginner-friendly to-do list web app built using HTML, CSS, and vanilla JavaScript to demonstrate DOM manipulation and event handling.

 The JavaScript logic handles task creation and deletion:

1. Element Selection: It selects the input field, button, and task list using getElementById.

2. Add Task: When the "Add Task" button is clicked:
  The input is read and trimmed.
  If the input is empty, an alert is shown.
  Otherwise, a new <li> is created with the task text and a "Delete" button.

3. Delete Task: Each task includes a "Delete" button that removes the task when clicked.

4. UI Update: The new task is added to the list, and the input field is cleared for the next entry.

This demonstrates DOM manipulation, event handling, and dynamic element creation using vanilla JavaScript.

The HTML file provides the layout for the to-do list app:

<input>: Where users type in their tasks.
  <button>: Triggers the addition of a new task.
  <ul>: Displays the list of tasks dynamically.
  Inline <style>: Adds basic spacing and visual layout.
  <script src="script.js">: Links the JavaScript functionality.
This simple structure forms the foundation of the interactive to-do list and helps demonstrate how HTML works alongside JavaScript to build web apps.
