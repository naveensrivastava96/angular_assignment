var newTodo = document.getElementById("newTodo");
var todoActiveList = document.getElementById("todo_active_list");
var todoCompetedList = document.getElementById("todo_complete_list");
var todoDeletedList = document.getElementById("todo_delete_list");


window.onload = function () {
    if(localStorage.getItem('todoList')){
        let list = JSON.parse(localStorage.getItem('todoList'));
        for(let i=0;i<list.names.length;i++){
            addTodo(list.names[i],list.status[i]);
        }
    }else{
        console.log(todos);
        localStorage.setItem('todoList',JSON.stringify(todos));
    }
    displayTodo();
}



function addbuttonfunc() {
    //todos = JSON.parse(localStorage.getItem('todoList'));
    console.log(todos);
    addTodo(newTodo.value,statusType.Active);

    saveTodo();
    displayTodo();
}

function saveTodo() {
    localStorage.setItem('todoList',JSON.stringify(todos));
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.Deleted;
    //console.log(todos);
    deleteTodoItem(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}

function uncompleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.Active;
    //console.log(todos);
    deleteTodoItem(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}


function completeTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.Completed;
    //console.log(todos);
    completeTodoItem(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}

function activeTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    todos.status[id] = statusType.Active;
    //console.log(todos);
    activeTodoItem(id);
    localStorage.setItem('todoList',JSON.stringify(todos));
    displayTodo();
}
function displayTodo(){

    todoActiveList.innerHTML = "";
    todoCompetedList.innerHTML="";
    todoDeletedList.innerHTML ="";

    let todoListStorage = JSON.parse(localStorage.getItem('todoList'));
    tbldelete=document.createElement("table");
    for(let i=0;i<todoListStorage.names.length;i++) {
        if (todoListStorage.status[i] === statusType.Deleted){
            var tr=document.createElement("tr");
            var td=document.createElement("td");
            td.setAttribute("class","del_td");

            var one_div = document.createElement("div");
            var nametoput=todoListStorage.names[i];
            var t = document.createTextNode(nametoput);
            //t.innerText=todoListStorage.name[i];

            one_div.setAttribute("data-id", i);
            one_div.appendChild(t);
            td.appendChild(one_div);
            tr.appendChild(td);
            tbldelete.appendChild(tr);

        }
    }

    tblcomplete=document.createElement("table");
    tblcomplete.style.width = '100%';
    tblcomplete.style.align = 'center';
    todoCompetedList.innerHTML=''
    for(let i=0;i<todoListStorage.names.length;i++) {
        if (todoListStorage.status[i] === statusType.Completed) {
            var one_div = document.createElement("tr");

            one_div.setAttribute("data-id", i);

            var td_btn=document.createElement('td')

            var uncomplete_btn = document.createElement("INPUT");
            uncomplete_btn.setAttribute("type","checkbox");
            uncomplete_btn.innerText = "mark to complete";
            uncomplete_btn.setAttribute("data-id", i);
            uncomplete_btn.setAttribute("checked","true");
            uncomplete_btn.setAttribute("onclick", "uncompleteTodo(" + i + ")");
            td_btn.appendChild(uncomplete_btn);

            //var para = document.createElement("P");
            td_t=document.createElement("td");
            td_t.setAttribute("class","td_space");
            var t = document.createTextNode(""+todoListStorage.names[i]+"");
            td_t.appendChild(t);


            td_del=document.createElement('td');
            var delete_btn=document.createElement("button");
            //delete_btn.innerText = "mark to delete";
            delete_btn.innerHTML = "&times;";
            delete_btn.setAttribute("data-id", i);
            delete_btn.setAttribute("onclick", "deleteTodo("+i+")");
            delete_btn.setAttribute("class","btn btn-default close")
            delete_btn.setAttribute("float","left");
            td_del.appendChild(delete_btn);
            one_div.appendChild(td_btn);
            one_div.appendChild(td_t);
            one_div.appendChild(td_del);


            tblcomplete.appendChild(one_div);


        }

        tblactive=document.createElement("table");
        tblactive.style.width = '100%';
        tblactive.style.align = 'center';
        todoActiveList.innerHTML=''
        for(let i=0;i<todoListStorage.names.length;i++) {
            if (todoListStorage.status[i] === statusType.Active) {
                var one_div = document.createElement("tr");
                one_div.setAttribute("data-id", i);
                var t_td = document.createElement('td');
                t_td.setAttribute("class", "active_td")
                //t.td.setAttribute("class","td_space");
                var nametoput=todoListStorage.names[i];
                var t = document.createTextNode(nametoput);


                var complete_btn_td = document.createElement("td");

                var complete_btn = document.createElement("INPUT");
                complete_btn.setAttribute("type", "checkbox");
                complete_btn.innerText = "mark to complete";
                complete_btn.setAttribute("data-id", i);
                complete_btn.setAttribute("onclick", "completeTodo("+i+")");

                var delete_btn_td = document.createElement("td");
                var delete_btn = document.createElement("button");
                delete_btn.innerHTML = "&times;";
                delete_btn.setAttribute("data-id", i);
                delete_btn.setAttribute("class", "btn btn-default close")
                delete_btn.setAttribute("onclick", "deleteTodo("+i+")");
                //todo_delete_button.setAttribute("class","del-button");
                //todo_element.setAttribute("class","text-in-delete");
                complete_btn_td.appendChild(complete_btn);
                one_div.appendChild(complete_btn_td);
                t_td.appendChild(t);
                one_div.appendChild(t_td);
                delete_btn_td.appendChild(delete_btn);
                one_div.appendChild(delete_btn_td);
                tblactive.appendChild(one_div)


            }
            todoActiveList.appendChild(tblactive);
            todoCompetedList.appendChild(tblcomplete);
            todoDeletedList.appendChild(tbldelete);
        }


    }








}
