import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListItemComponent } from './investment-list-item.component';

describe('InvestmentListItemComponent', () => {
  let component: InvestmentListItemComponent;
  let fixture: ComponentFixture<InvestmentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
