import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalheComponent } from './admin-detalhe.component';

describe('AdminDetalheComponent', () => {
  let component: AdminDetalheComponent;
  let fixture: ComponentFixture<AdminDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
