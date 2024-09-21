document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span> <button class="deleteBtn">Delete</button>`;
    
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
}
