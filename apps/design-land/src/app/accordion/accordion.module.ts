import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandAccordionRoutingModule } from './accordion-routing.module';
import { DesignLandAccordionComponent } from './accordion.component';


@NgModule({
  declarations: [
    DesignLandAccordionComponent,
  ],
  imports: [
    CommonModule,
    DesignLandAccordionRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandAccordionModule {

}
