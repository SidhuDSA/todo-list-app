const inputList=document.querySelector("input");
const addBtn=document.querySelector(".input-btn");
const addList=document.querySelector(".list-added");

addBtn.addEventListener('click',addTodo);

inputList.addEventListener('keypress',function(e){
if(e.key==='Enter'){
    addTodo();
}
}
);
function addTodo(){
    const todoText=inputList.value.trim();
    if(todoText!==''){
       var li=document.createElement('li');
        li.textContent=todoText;
        addList.appendChild(li);
        inputList.value="";

    }
}