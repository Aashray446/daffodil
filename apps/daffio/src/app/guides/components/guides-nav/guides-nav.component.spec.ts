import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffLinkSetModule } from '@daffodil/design';

import { DaffioGuidesNavComponent } from './guides-nav.component';

describe('DaffioGuidesNavComponent', () => {
  let component: DaffioGuidesNavComponent;
  let fixture: ComponentFixture<DaffioGuidesNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioGuidesNavComponent],
      imports: [
        RouterTestingModule,
        DaffLinkSetModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioGuidesNavComponent);
    component = fixture.componentInstance;
    const guideWithoutChildren = {
      id: 'id2',
      title: 'title2',
      children: [],
    };
    const guideWithChildren = {
      id: 'id3',
      title: 'title3',
      children: [
        {
          id: 'id4',
          title: 'title4',
          children: [],
        },
      ],
    };

    component.guideList = {
      id: 'id',
      title: 'title',
      children: [
        guideWithoutChildren,
        guideWithChildren,
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an anchor tag when the guide child has no children', () => {
    const anchorTags = fixture.debugElement.queryAll(By.css('a'));
    expect(anchorTags.length).toEqual(2);
  });

  it('should render a daff-tree-item for each guide', () => {
    const daffTreeItem = fixture.debugElement.queryAll(By.css('daff-tree-item'));
    expect(daffTreeItem.length).toEqual(4);
  });
});
