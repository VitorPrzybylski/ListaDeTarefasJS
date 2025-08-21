document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    addButton.addEventListener('click', addTodo);
    document.addEventListener('keypress',(event)=> {
        console.log(event.key)
        if(event.key=='Enter'){
            addTodo();
        }
    })
    function addTodo(){
        //pegar oque esta no input
        const texto = todoInput.value.trim()
        // validar
        if (texto !== ''){
            const li = document.createElement('li')
            li.textContent=texto
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Deletar";
            deleteButton.className="delete-button";
            deleteButton.addEventListener('click',()=>{
                todoList.removeChild(li)
            })
            
            console.log(li)
            li.appendChild(deleteButton);
            todoList.appendChild(li)
            todoInput.value='';
            todoInput.focus();
        }
        //adicionar na lista
    }
    

})