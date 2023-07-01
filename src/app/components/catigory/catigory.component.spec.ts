import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoryComponent } from './catigory.component';

describe('CatigoryComponent', () => {
  let component: CatigoryComponent;
  let fixture: ComponentFixture<CatigoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatigoryComponent]
    });
    fixture = TestBed.createComponent(CatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
