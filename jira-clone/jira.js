/**
 * 
 * <div class="modal">
        <div class="modal-container">
            <span class="material-icons">close</span>
            <form>
                <input name="title" type="text" placeholder="Title" required>
                <input name="assignee" placeholder="Assignee" required/>
                <select name="status" id="" required>
                    <option value="TODO">To DO</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                </select>
                <textarea name="description" cols="30" rows="4"></textarea>
                <button>Create</button>
            </form>
        </div>
    </div>
 */
const modalHtml = `
<div class="modal-container">
    <span class="material-icons">close</span>
    <form id="create-form">
        <input name="title" type="text" placeholder="Title" required>
        <input name="assignee" placeholder="Assignee" required/>
        <select name="status" required>
            <option value="TODO">To DO</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
        </select>
        <textarea name="description" cols="30" rows="4"></textarea>
        <button>Create</button>
    </form>
</div>` ;

let count = 0;

const createElement = document.getElementById("create") ;

createElement.addEventListener("click", () => {
    const modal = document.createElement("div");// #300, #400
    modal.className = "modal" ;
    modal.innerHTML = modalHtml ;
    document.body.appendChild(modal); // form will also becomes the part of DOM

    const form = document.getElementById("create-form");

    const removeFormListener = () => {
        form.removeEventListener("submit", formDataListener)
    }

    const formDataListener = (e) => {
        e.preventDefault();
        let elements = e.target.elements ; 
        let taskObject = {} ;
        for(let i = 0 ; i < elements.length; i++) {
            elements[i].name && (taskObject[elements[i].name] = elements[i].value)
        }
        createTask(taskObject); 
        modal.remove();
        removeFormListener();
    }
    form.addEventListener("submit" , formDataListener)
})

/**
 
<div class="task" draggable="true">
    <b>Task Title</b>
    <strong>Aravind</strong>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, eos?</p>
</div>
 */
function createTask(taskObject) {
    
    const taskContainer = document.createElement("div");
    taskContainer.className = "task" ;
    taskContainer.draggable = "true" ;
    taskContainer.id = `task-${count}`
    count++;

    taskContainer.innerHTML = `
            <b>${taskObject.title}</b>
            <strong>${taskObject.assignee}</strong>
            <p>${taskObject.description}</p>
    `;

    taskContainer.addEventListener("dragstart", (e) => {
        // set some information 
        // id of the taskElement , id of the container from which the dragging is started
        e.dataTransfer.setData("source", taskContainer.id);
        e.dataTransfer.setData("parent", taskContainer.parentElement.id); // IN_PROGRESS, TODO, DONE
    })

    const panel = document.getElementById(taskObject.status);
    panel.appendChild(taskContainer) ;
}

function toggleItem() {
    const dropdown = document.getElementsByClassName("dropdown-list")[0] ;
    dropdown.style.display === "block" ? (dropdown.style.display = "none") : (dropdown.style.display = "block") 
}
