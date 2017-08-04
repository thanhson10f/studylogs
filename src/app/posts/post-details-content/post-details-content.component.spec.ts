import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsContentComponent } from './post-details-content.component';

describe('PostDetailsContentComponent', () => {
  let component: PostDetailsContentComponent;
  let fixture: ComponentFixture<PostDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
