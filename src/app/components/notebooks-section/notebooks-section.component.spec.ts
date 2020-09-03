import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebooksSectionComponent } from './notebooks-section.component';

describe('NotebooksSectionComponent', () => {
  let component: NotebooksSectionComponent;
  let fixture: ComponentFixture<NotebooksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebooksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebooksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
