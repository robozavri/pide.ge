import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestedWalkersComponent } from './requested-walkers.component';

describe('RequestedWalkersComponent', () => {
  let component: RequestedWalkersComponent;
  let fixture: ComponentFixture<RequestedWalkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedWalkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedWalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
