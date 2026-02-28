import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedGalleryTest } from './detailed-gallery-test';

describe('DetailedGalleryTest', () => {
  let component: DetailedGalleryTest;
  let fixture: ComponentFixture<DetailedGalleryTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedGalleryTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedGalleryTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
