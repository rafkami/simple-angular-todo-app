import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ActionsComponent } from "./actions/actions.component";
import { ResultComponent } from "./result/result.component";
import { FormsModule } from "@angular/forms";
import { StorageServiceModule, LOCAL_STORAGE } from "ngx-webstorage-service";
import { TODO_SERVICE_STORAGE, TodoService } from "./todo.service";

@NgModule({
  declarations: [AppComponent, ActionsComponent, ResultComponent],
  imports: [BrowserModule, FormsModule, StorageServiceModule],
  providers: [
    { provide: TODO_SERVICE_STORAGE, useExisting: LOCAL_STORAGE },
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
