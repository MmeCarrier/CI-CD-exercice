import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnimal } from './create-animal';

describe('CreateAnimal', () => {
  let component: CreateAnimal;
  let fixture: ComponentFixture<CreateAnimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAnimal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnimal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
