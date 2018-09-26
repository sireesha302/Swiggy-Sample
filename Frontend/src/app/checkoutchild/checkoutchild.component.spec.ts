import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutchildComponent } from './checkoutchild.component';

describe('CheckoutchildComponent', () => {
  let component: CheckoutchildComponent;
  let fixture: ComponentFixture<CheckoutchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
