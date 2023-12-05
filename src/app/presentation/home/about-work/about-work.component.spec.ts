import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkComponent } from './about-work.component';

describe('AboutWorkComponent', () => {
  let component: AboutWorkComponent;
  let fixture: ComponentFixture<AboutWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutWorkComponent]
    });
    fixture = TestBed.createComponent(AboutWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
