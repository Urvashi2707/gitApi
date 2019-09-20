import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeImgComponent } from './take-img.component';

describe('TakeImgComponent', () => {
  let component: TakeImgComponent;
  let fixture: ComponentFixture<TakeImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
