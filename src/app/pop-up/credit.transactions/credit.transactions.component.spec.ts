import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTransactionsComponent } from './credit.transactions.component';

describe('CreditTransactionsComponent', () => {
  let component: CreditTransactionsComponent;
  let fixture: ComponentFixture<CreditTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditTransactionsComponent]
    });
    fixture = TestBed.createComponent(CreditTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
