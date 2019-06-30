import { Inject, Injectable, InjectionToken } from "@angular/core";
import { StorageService } from "ngx-webstorage-service";
import { BehaviorSubject, Observable } from "rxjs";

const STORAGE_KEY = "todoList";

export const TODO_SERVICE_STORAGE = new InjectionToken<StorageService>(
  "TODO_SERVICE_STORAGE"
);

@Injectable()
export class TodoService {
  todoList = [];
  newTodo: string;
  todoListObs = new BehaviorSubject<Array<string>>(this.todoList);

  constructor(@Inject(TODO_SERVICE_STORAGE) private storage: StorageService) {
    this.todoList = this.storage.get(STORAGE_KEY) || [];
    this.todoListObs.next(this.todoList);
  }

  public createTodo(todo: string): void {
    this.todoList.push(todo);
    this.todoListObs.next(this.todoList);
    this.storage.set(STORAGE_KEY, this.todoList);
    console.log(this.storage.get(STORAGE_KEY));
  }

  public deleteTodo() {
    this.todoList.pop();
    this.todoListObs.next(this.todoList);
    this.storage.set(STORAGE_KEY, this.todoList);
    console.log(this.storage.get(STORAGE_KEY));
  }

  public clearList() {
    this.todoList = [];
    this.todoListObs.next(this.todoList);
    this.storage.set(STORAGE_KEY, this.todoList);
    console.log(this.storage.get(STORAGE_KEY));
  }

  getTodoListObs(): Observable<Array<string>> {
    return this.todoListObs.asObservable();
  }
}
