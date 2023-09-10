import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexThreejsComponent } from './index-threejs.component';

describe('IndexThreejsComponent', () => {
  let component: IndexThreejsComponent;
  let fixture: ComponentFixture<IndexThreejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexThreejsComponent]
    });
    fixture = TestBed.createComponent(IndexThreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
