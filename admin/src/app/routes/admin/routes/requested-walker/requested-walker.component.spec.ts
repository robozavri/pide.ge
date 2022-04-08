import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestedWalkerComponent } from './requested-walker.component';

describe('RequestedWalkerComponent', () => {
  let component: RequestedWalkerComponent;
  let fixture: ComponentFixture<RequestedWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
