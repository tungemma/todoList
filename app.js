const task = document.getElementById('todoInput');
const addTask = document.getElementById('addTaskButton');
const tasks = document.querySelector('.tasks');
const deleteTask = document.getElementById('deleteTaskButton')


addTask.addEventListener('click', ()=> {
if(task.value==='') {
task.style.border ='2px solid red';
task.setAttribute('placeholder', 'Please Enter one Task')
}

else {
const list = document.createElement('li');
list.classList.add('taskItem');
list.textContent = task.value;

const deleteTaskButton = document.createElement('button');
deleteTaskButton.setAttribute('id', 'deleteTaskButton');
deleteTaskButton.innerText ='Delete Task';
list.appendChild(deleteTaskButton);
tasks.appendChild(list);
task.value = '';
deleteTaskButton.addEventListener('click', (e)=> {
    e.target.parentNode.remove()})
}

})


