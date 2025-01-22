const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between';
    listItem.innerHTML = `${task} <button class="btn btn-danger btn-sm">Remove</button>`;
    taskList.appendChild(listItem);

    listItem.querySelector('button').addEventListener('click', () => {
      listItem.remove();
    });

    taskInput.value = '';
  }
});