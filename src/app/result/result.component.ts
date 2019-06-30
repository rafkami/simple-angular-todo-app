import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  todoList = [];

  constructor(private todoService: TodoService) {
    this.todoService.getTodoListObs().subscribe((todos: Array<string>) => {
      this.todoList = todos;
    });
  }

  ngOnInit(): void {}
}
