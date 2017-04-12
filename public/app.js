var app = angular.module("Schedular", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    this.editMode=false;
    this.todos = [
       "Visit Java Brains"
    ];
    this.addNewTodo = function() {
        this.todos.push(this.newTodo);
        this.newTodo="";
    }
    this.TriggerEditMode = function(){
     this.editMode=!this.editMode;   
    }

    this.DeleteTodo=function(index){
        this.todos.splice(index,1);

    }
}