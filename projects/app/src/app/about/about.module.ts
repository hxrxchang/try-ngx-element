import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule],
})
export class AboutModule {
  customElementComponent: Type<any> = AboutComponent;
}
