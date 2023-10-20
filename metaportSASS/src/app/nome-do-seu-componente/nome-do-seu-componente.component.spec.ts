import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeDoSeuComponenteComponent } from './nome-do-seu-componente.component';

describe('NomeDoSeuComponenteComponent', () => {
  let component: NomeDoSeuComponenteComponent;
  let fixture: ComponentFixture<NomeDoSeuComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeDoSeuComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeDoSeuComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
