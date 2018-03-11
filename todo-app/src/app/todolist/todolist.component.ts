import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  text: string;
  todos: any;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = [
      {
        text: 'cook breakfast and lunch'
      },{
        text: 'drive to office'
      },{
        text: 'write document and submit report'
      }
    ];


  }

  addTodo(){
    this.todos.push({
      text:this.text
    });
  }
  
  deleteTodo(todoText){
    for(var i=0; i<this.todos.length; i++) {
      if(this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }

     }

  }
}
