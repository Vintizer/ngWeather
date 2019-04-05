import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveHotelPhotoComponent } from './active-hotel-photo.component';

describe('ActiveHotelPhotoComponent', () => {
  let component: ActiveHotelPhotoComponent;
  let fixture: ComponentFixture<ActiveHotelPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveHotelPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveHotelPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
