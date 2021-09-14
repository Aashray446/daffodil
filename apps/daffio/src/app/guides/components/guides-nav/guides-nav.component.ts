import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { DaffioGuideList } from '../../../docs/models/guide-list';

@Component({
  selector: 'daffio-guides-nav',
  templateUrl: './guides-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioGuidesNavComponent {
  /**
   * The guide list to render
   */
  @Input() guideList: DaffioGuideList;

  activeRouterLinkConfiguration: RouterLinkActive['routerLinkActiveOptions'] = {
    exact: true,
  };
}
