import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLabeling } from './image-labeling';

describe('ImageLabeling', () => {
  let component: ImageLabeling;
  let fixture: ComponentFixture<ImageLabeling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLabeling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLabeling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
