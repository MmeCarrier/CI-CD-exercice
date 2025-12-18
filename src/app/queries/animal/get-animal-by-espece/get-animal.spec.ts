import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnimalsByEspece } from './get-animal-by-espece';

describe('GetAnimalByEspece', () => {
  let component: GetAnimalsByEspece;
  let fixture: ComponentFixture<GetAnimalsByEspece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAnimalsByEspece]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAnimalsByEspece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
