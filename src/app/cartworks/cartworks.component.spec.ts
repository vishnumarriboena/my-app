import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartworksComponent } from './cartworks.component';

describe('CartworksComponent', () => {
  let component: CartworksComponent;
  let fixture: ComponentFixture<CartworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
