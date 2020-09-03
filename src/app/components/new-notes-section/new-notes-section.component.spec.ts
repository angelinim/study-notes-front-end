import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotesSectionComponent } from './new-notes-section.component';

describe('NewNotesSectionComponent', () => {
  let component: NewNotesSectionComponent;
  let fixture: ComponentFixture<NewNotesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNotesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNotesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
