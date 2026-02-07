import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBenevoleBySurname } from './get-benevole-by-surname';

describe('GetBenevoleBySurname', () => {
  let component: GetBenevoleBySurname;
  let fixture: ComponentFixture<GetBenevoleBySurname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBenevoleBySurname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBenevoleBySurname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
