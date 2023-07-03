import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NestedDragNDropFormComponent } from './nested-drag-n-drop-form.component';

describe('NestedDragNDropFormComponent', () => {
  let component: NestedDragNDropFormComponent;
  let fixture: ComponentFixture<NestedDragNDropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedDragNDropFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedDragNDropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
