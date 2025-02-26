import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { sharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/task.module";
@NgModule({
    declarations : [AppComponent , HeaderComponent , UserComponent],
    bootstrap : [AppComponent],
    imports : [BrowserModule,sharedModule,TaskModule]
})

export class appModule{}