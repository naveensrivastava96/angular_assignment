interface todoList{
    name:string,
    status:string
}

class todoItems
{
    names:string[]
    status:string[]
    public constructor(names:string[],status:string[])
    {
        this.names=names;
        this.status=status;
    }

    add(list:todoList){
        this.names.push(list.name);
        this.status.push(list.status);
    }


    display() {
        console.log(`names ${this.names} `);
        console.log(`status ${this.status}`);
    }


}

var list = new todoItems(["apples"],["active"]);

function addItem(name: string, status: string) {
    list.add({
        name:name,
        status:status
    });
    return list;
}

function displayItem() {
    list.display();
}

