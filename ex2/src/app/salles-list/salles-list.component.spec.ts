import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesListComponent } from './salles-list.component';

describe('SallesListComponent', () => {
  let component: SallesListComponent;
  let fixture: ComponentFixture<SallesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
