import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnimalParNom } from './get-animal-par-nom';

describe('GetAnimalParNom', () => {
  let component: GetAnimalParNom;
  let fixture: ComponentFixture<GetAnimalParNom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAnimalParNom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAnimalParNom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
