import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './list.component';

describe('ListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListComponent]
    });
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
