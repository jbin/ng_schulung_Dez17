import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductService, MockProductService } from '../product.service';
import { ItemComponent } from '../item/item.component';
import { BruttoPipe } from '../brutto.pipe';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ItemComponent, BruttoPipe],
      providers: [{ provide: ProductService, useClass: MockProductService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    component.productList.subscribe(
      (list) => {
        expect(list.length).toBe(2);
        expect(list[0].id).toBe(1);
      }
    );
  }));
  it('should create', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const itemElems = fixture.debugElement.query(By.css('.id'));
      expect(itemElems.nativeElement.textContent).toBe('id: 1 ');
    });
  }));

});
