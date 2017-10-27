var todoItems = /** @class */ (function () {
    function todoItems(names, status) {
        this.names = names;
        this.status = status;
    }
    todoItems.prototype.add = function (list) {
        this.names.push(list.name);
        this.status.push(list.status);
    };
    todoItems.prototype.display = function () {
        console.log("names " + this.names + " ");
        console.log("status " + this.status);
    };
    return todoItems;
}());
var list = new todoItems(["apples"], ["active"]);
function addItem(name, status) {
    list.add({
        name: name,
        status: status
    });
    return list;
}
function displayItem() {
    list.display();
}
