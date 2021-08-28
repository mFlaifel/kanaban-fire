import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './sharedModules/angular-material/angular-material.module';
import { TaskComponent } from './components/task/task.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, TaskDialogComponent],
  imports: [BrowserModule, AngularMaterialModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
