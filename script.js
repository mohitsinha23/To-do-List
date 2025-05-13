function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // Toggle complete on click
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
  }
  