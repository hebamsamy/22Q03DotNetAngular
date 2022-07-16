import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthoriedComponent } from './unauthoried.component';

describe('UnauthoriedComponent', () => {
  let component: UnauthoriedComponent;
  let fixture: ComponentFixture<UnauthoriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthoriedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthoriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
