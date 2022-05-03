import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailComponent } from './coin-detail.component';

describe('CoinDetailComponent', () => {
  let component: CoinDetailComponent;
  let fixture: ComponentFixture<CoinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
