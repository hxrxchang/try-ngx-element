import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElementModule } from 'ngx-element';

const lazyConfig = [
  {
    selector: 'element-top',
    loadChildren: () =>
      import('projects/app/src/app/top/top.module').then((m) => m.TopModule),
  },
  {
    selector: 'element-about',
    loadChildren: () =>
      import('projects/app/src/app/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
];

@NgModule({
  imports: [BrowserModule, NgxElementModule.forRoot(lazyConfig)],
  providers: [],
})
export class AppModule {
  ngDoBootstrap(): void {}
}
