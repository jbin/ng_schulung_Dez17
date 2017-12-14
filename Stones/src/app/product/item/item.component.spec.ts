import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { By } from '@angular/platform-browser';
import { BruttoPipe } from '../brutto.pipe';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent, BruttoPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should bind data correctly', () => {
    component.product.id = 7;
    fixture.detectChanges();
    const idElem = fixture.debugElement.query(By.css('.id'));
    expect(idElem.nativeElement.textContent).toContain(7);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise price', () => {
    component.product.price = 5;
    component.raisePrice();
    expect(component.product.price).toEqual(10);
  });
});
