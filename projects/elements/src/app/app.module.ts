import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from 'projects/app/src/app/about/components/about/about.component';
import { TopComponent } from 'projects/app/src/app/top/components/top/top.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const topElement = createCustomElement(TopComponent, { injector });
    const aboutElement = createCustomElement(AboutComponent, { injector });
    customElements.define('element-top', topElement);
    customElements.define('element-about', aboutElement);
  }

  ngDoBootstrap(): void {}
}
