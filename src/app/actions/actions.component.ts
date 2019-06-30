import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"]
})
export class ActionsComponent implements OnInit {
  newTodo: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  createTodo() {
    if (this.newTodo !== "" && this.newTodo != null) {
      this.todoService.createTodo(this.newTodo);
      this.newTodo = "";
    }
  }

  deleteTodo() {
    this.todoService.deleteTodo();
  }

  clearList() {
    this.todoService.clearList();
  }
}
