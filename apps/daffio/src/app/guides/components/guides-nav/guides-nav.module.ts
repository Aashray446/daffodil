import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffTreeModule } from '@daffodil/design/tree';

import { DaffioGuidesNavComponent } from './guides-nav.component';

@NgModule({
  declarations: [
    DaffioGuidesNavComponent,
  ],
  exports: [
    DaffioGuidesNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffLinkSetModule,
    DaffListModule,
    DaffTreeModule,
  ],
})
export class DaffioGuidesNavModule { }
