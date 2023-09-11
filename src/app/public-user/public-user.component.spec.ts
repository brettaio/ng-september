import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicUserComponent } from './public-user.component';

describe('PublicUserComponent', () => {
  let component: PublicUserComponent;
  let fixture: ComponentFixture<PublicUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicUserComponent]
    });
    fixture = TestBed.createComponent(PublicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
