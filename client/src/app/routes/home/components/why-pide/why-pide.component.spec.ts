import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPideComponent } from './why-pide.component';

describe('WhyPideComponent', () => {
  let component: WhyPideComponent;
  let fixture: ComponentFixture<WhyPideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyPideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyPideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
