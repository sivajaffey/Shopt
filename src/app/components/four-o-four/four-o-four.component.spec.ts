import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOFourComponent } from './four-o-four.component';

describe('FourOFourComponent', () => {
  let component: FourOFourComponent;
  let fixture: ComponentFixture<FourOFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourOFourComponent]
    });
    fixture = TestBed.createComponent(FourOFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
