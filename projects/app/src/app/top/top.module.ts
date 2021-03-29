import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './components/top/top.component';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule],
})
export class TopModule {
  customElementComponent: Type<any> = TopComponent;
}
