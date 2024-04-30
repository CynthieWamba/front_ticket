import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListingComponent } from './tag-listing.component';

describe('TagListingComponent', () => {
  let component: TagListingComponent;
  let fixture: ComponentFixture<TagListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
