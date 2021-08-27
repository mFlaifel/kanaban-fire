import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MaterialModules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
];
@NgModule({
  declarations: [],
  imports: MaterialModules,
  exports: MaterialModules,
})
export class AngularMaterialModule {}
