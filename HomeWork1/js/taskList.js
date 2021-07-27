const $template = document.createElement('template');
$template.innerHTML = `
      <form class = 'task-list'>
      <h1>TaskList</h1>
        <input-container class = 'name' placeholder = 'New Task' error = ''></input-container>
        <input-container class = 'desc' placeholder = 'Description'></input-container>
        <button>Add Task</button>
        <div class = 'task-container'>
          <div class = 'task-container-child1'>
           <span>Name</span><span>Description</span>
            </div>
          <div class = 'task-container-child2'>
         
            </div>
        </div>
       
       </form>
`

export default class TaskList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.name');
        this.$desc = this.querySelector('.desc');
        this.$taskList = this.querySelector('.task-list');
        this.$inputContainer = this.querySelector('input-container');
        this.$taskChild2 = this.querySelector('.task-container-child2');
       
    }

   

    //display task
    DisplayTask(task) {
        let div = document.createElement('div')
        div.innerHTML = `
          <span class = 'task-name'>${task.name}</span><span class = 'task-desc'>${task.desc}</span><i class="fas fa-times-circle delete"></i>`
        this.$taskChild2.appendChild(div)
    }

     //delete
     delete(child) {
         if(child.classList.contains('delete')) {
                    child.parentElement.remove()
         }
          
     }
     //remove task in localStorage
     removeInLocal(desc){
        let allTask = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        allTask.forEach((task, index) => {
            if(task.desc == desc) {
                allTask.splice(index, 1)
            }
        })

        localStorage.setItem('tasks', JSON.stringify(allTask))
     }

    connectedCallback() {
        // Display task when page load
        let allTask = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        
        allTask.forEach(task => {
            this.DisplayTask(task)
               console.log(task);
        })

        // delete task

        this.$taskChild2.addEventListener('click', (e) => {
            if(confirm('Are you sure?')){
                //delete in UI
              this.delete(e.target);
              //delete in localStorage
              this.removeInLocal((e.target.previousElementSibling.textContent));
            }
            else{
                return;
            }
            
        })

        //add task in local storage and display in UI

        this.$taskList.onsubmit = (event) => {
            event.preventDefault();
            let allTask = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
            let name = this.$name.value;
            let desc = this.$desc.value;
            if (name == '' || desc == '') {
                alert('Try Again!');
                return;
            }
            //add task
            let task = {
                'name': name,
                'desc': desc
            }
            this.$name.clear();
            this.$desc.clear();
            this.DisplayTask(task);
            allTask.push(task);
            localStorage.setItem('tasks', JSON.stringify(allTask))
            alert('Add Task Successfully!')
           
        }
    }
}


window.customElements.define('task-list', TaskList)