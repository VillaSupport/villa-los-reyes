import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderLabComponent } from './main-header-lab-component';

describe('MainHeaderLabComponent', () => {
  let component: MainHeaderLabComponent;
  let fixture: ComponentFixture<MainHeaderLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeaderLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
