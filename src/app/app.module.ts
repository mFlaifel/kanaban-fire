import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from './sharedModules/angular-material/angular-material.module';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [BrowserModule, AngularMaterialModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
