import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsAssociatedRpaComponent } from './movements-associated-rpa.component';

describe('MovementsAssociatedRpaComponent', () => {
  let component: MovementsAssociatedRpaComponent;
  let fixture: ComponentFixture<MovementsAssociatedRpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementsAssociatedRpaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovementsAssociatedRpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
