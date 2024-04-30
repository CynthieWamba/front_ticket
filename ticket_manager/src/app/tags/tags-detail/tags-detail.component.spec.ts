import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDetailComponent } from './tags-detail.component';

describe('TagsDetailComponent', () => {
  let component: TagsDetailComponent;
  let fixture: ComponentFixture<TagsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
