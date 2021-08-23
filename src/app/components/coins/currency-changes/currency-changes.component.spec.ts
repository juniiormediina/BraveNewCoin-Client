import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChangesComponent } from './currency-changes.component';

describe('CurrencyChangesComponent', () => {
  let component: CurrencyChangesComponent;
  let fixture: ComponentFixture<CurrencyChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
