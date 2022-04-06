import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendStoriesComponent } from './friend-stories.component';

describe('FriendStoriesComponent', () => {
  let component: FriendStoriesComponent;
  let fixture: ComponentFixture<FriendStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
