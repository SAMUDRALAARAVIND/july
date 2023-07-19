

const panels = document.getElementsByClassName("panel") ;

for(let i = 0 ; i < panels.length; i++){
    panels[i].addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    panels[i].addEventListener("drop" , (e) => {
        let parentId = e.dataTransfer.getData("parent"); // DONE
        let sourceId = e.dataTransfer.getData("source"); // task-0

        if(parentId === panels[i].id){
            window.alert("you can't drop in the same zone")
            return ;
        }
        let draggedElement = document.getElementById(sourceId); 
        panels[i].appendChild(draggedElement);
    })
}

/*
    dragstart => the element we wanted to drag
    dragenter => the element onto which we drag other element(container)
    dragleave => the container onto which dragged element will be left
    dragover => container
    drop => container
*/