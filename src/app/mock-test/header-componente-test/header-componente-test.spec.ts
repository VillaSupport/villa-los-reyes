import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenteTest } from './header-componente-test';

describe('HeaderComponenteTest', () => {
  let component: HeaderComponenteTest;
  let fixture: ComponentFixture<HeaderComponenteTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponenteTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponenteTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
