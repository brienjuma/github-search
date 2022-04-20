import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBioInformationComponent } from './user-bio-information.component';

describe('UserBioInformationComponent', () => {
  let component: UserBioInformationComponent;
  let fixture: ComponentFixture<UserBioInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBioInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBioInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
