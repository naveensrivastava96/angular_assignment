
var onloadrun=0;

window.onload = function() {
    //console.log(localStorage.getItem("my_list"));
    if(localStorage.getItem("my_list")) {
        l=JSON.parse(localStorage.getItem("my_list"));
        //console.log(l);

        onloadrun=1;

    }
    else{
        localStorage.setItem("my_list", JSON.stringify(list));
        //console.log(localStorage.getItem("my_list"));


        onloadrun=0;

    }
    newtododisplaylist();
    createcompletedelements();
    createdeletedelements();



}



function newtododisplaylist(){

    //console.log(localStorage.getItem('qqq'))
    var my_obj=JSON.parse(localStorage.getItem("my_list"))
    //console.log(my_obj)
    var list_div=document.getElementById('list_active_todo');
    list_div.innerHTML='';

    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.align = 'center';
    list_div.appendChild(tbl);

    for (var i = 0; i < my_obj.names.length; i++) {
        if (my_obj.status[i] === 'active') {
            var one_div = document.createElement("tr");
            one_div.setAttribute("data-id", i);
            var t_td = document.createElement('td');
            t_td.setAttribute("class","active_td")
            //t.td.setAttribute("class","td_space");
            var t = document.createTextNode(""+my_obj.names[i]+"");



            var complete_btn_td = document.createElement("td");

            var complete_btn = document.createElement("INPUT");
            complete_btn.setAttribute("type","checkbox");
            complete_btn.innerText = "mark to complete";
            complete_btn.setAttribute("data-id", i);
            complete_btn.setAttribute("onclick", "completefunction(" + i + ")");

            var delete_btn_td = document.createElement("td");
            var delete_btn = document.createElement("button");
            delete_btn.innerHTML = "&times;";
            delete_btn.setAttribute("data-id", i);
            delete_btn.setAttribute("class","btn btn-default close")
            delete_btn.setAttribute("onclick", "deletefunction(" + i + ")");
            //todo_delete_button.setAttribute("class","del-button");
            //todo_element.setAttribute("class","text-in-delete");
            complete_btn_td.appendChild(complete_btn);
            one_div.appendChild(complete_btn_td);
            t_td.appendChild(t);
            one_div.appendChild(t_td);
            delete_btn_td.appendChild(delete_btn);
            one_div.appendChild(delete_btn_td);
            tbl.appendChild(one_div)

        }
    }


}

function addtodo ()
{
    var value = document.getElementById('inp').value;
    document.getElementById('inp').innerText='';
    var status = "active";
    if(onloadrun)
    {
       for(var i=1;i<l.names.length;i++)
       {
           addItem(l.names[i],l.status[i]);
       }
        addItem(value, status);
       //console.log(list);
        onloadrun = 0;
        localStorage.setItem("my_list", JSON.stringify(list));

    }
    else {
    addItem(value, status);
    //console.log(list)
        localStorage.setItem("my_list", JSON.stringify(list));
    }
    newtododisplaylist();

}

function createdeletedelements() {
    var my_obj=JSON.parse(localStorage.getItem("my_list"))
    var list_div = document.getElementById('list_delete_todo');
    list_div.innerHTML = ''
    tbl=document.createElement("table");
    list_div.appendChild(tbl);
    for (var i = 0; i < my_obj.names.length; i++) {

        if (my_obj.status[i] == 'delete') {
            var tr=document.createElement("tr");
            var td=document.createElement("td");
            td.setAttribute("class","del_td");

            var one_div = document.createElement("div");
            var t = document.createTextNode(""+my_obj.names[i]+"");

            one_div.setAttribute("data-id", i);
            one_div.appendChild(t);
            td.appendChild(one_div);
            tr.appendChild(td);
            tbl.appendChild(tr);
            //list_div.appendChild(one_div);

        }
    }
}


function createcompletedelements() {
    var my_obj=JSON.parse(localStorage.getItem("my_list"))
    var list_div = document.getElementById('list_complete_todo');
    list_div.innerHTML = ''
    var tbl=document.createElement('table');
    tbl.style.width = '100%';
    list_div.appendChild(tbl);
    for (var i = 0; i < my_obj.names.length; i++) {

        if (my_obj.status[i] == 'complete') {
            var one_div = document.createElement("tr");

            one_div.setAttribute("data-id", i);

            var td_btn=document.createElement('td')

            var uncomplete_btn = document.createElement("INPUT");
            uncomplete_btn.setAttribute("type","checkbox");
            uncomplete_btn.innerText = "mark to complete";
            uncomplete_btn.setAttribute("data-id", i);
            uncomplete_btn.setAttribute("checked","true");
            uncomplete_btn.setAttribute("onclick", "uncompletefunction(" + i + ")");
            td_btn.appendChild(uncomplete_btn);

            //var para = document.createElement("P");
            td_t=document.createElement("td");
            td_t.setAttribute("class","td_space");
            var t = document.createTextNode(""+my_obj.names[i]+"");
            td_t.appendChild(t);


            td_del=document.createElement('td');
            var delete_btn=document.createElement("button");
            //delete_btn.innerText = "mark to delete";
            delete_btn.innerHTML = "&times;";
            delete_btn.setAttribute("data-id", i);
            delete_btn.setAttribute("onclick", "deletefunction(" + i + ")");
            delete_btn.setAttribute("class","btn btn-default close")
            delete_btn.setAttribute("float","left");
            td_del.appendChild(delete_btn);
            one_div.appendChild(td_btn);
            one_div.appendChild(td_t);
            one_div.appendChild(td_del);


            tbl.appendChild(one_div);

        }
    }
}

function deletefunction(id)
{
    var local_st_obj=JSON.parse(localStorage.getItem("my_list"));
    for(i=0;i<local_st_obj.names.length;i++)
    {
        if(i==id)
        {
            local_st_obj.status[i]='delete'
            console.log(local_st_obj);
            localStorage.setItem("my_list",JSON.stringify(local_st_obj))
        }
    }
    newtododisplaylist();
    createcompletedelements();
    createdeletedelements();
}

function completefunction(id)
{
    var item_to_complete;
    var local_st_obj=JSON.parse(localStorage.getItem("my_list"));
    for(i=0;i<local_st_obj.names.length;i++)
    {
        if(i==id)
        {
            local_st_obj.status[i]='complete'
            console.log(local_st_obj);
            localStorage.setItem("my_list",JSON.stringify(local_st_obj))
        }
    }
    newtododisplaylist();
    createcompletedelements();
    createdeletedelements();
}

function uncompletefunction(id)
{

    var local_st_obj=JSON.parse(localStorage.getItem("my_list"));
    for(i=0;i<local_st_obj.names.length;i++)
    {
        if(i==id)
        {
            local_st_obj.status[i]='active'
            console.log(local_st_obj);
            localStorage.setItem("my_list",JSON.stringify(local_st_obj))
        }
    }
    newtododisplaylist();
    createcompletedelements();
    createdeletedelements();
}

