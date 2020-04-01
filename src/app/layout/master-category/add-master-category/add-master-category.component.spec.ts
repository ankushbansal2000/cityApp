import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMasterCategoryComponent } from './add-master-category.component';

describe('AddMasterCategoryComponent', () => {
  let component: AddMasterCategoryComponent;
  let fixture: ComponentFixture<AddMasterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMasterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMasterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
