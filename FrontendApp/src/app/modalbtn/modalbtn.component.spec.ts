import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalbtnComponent } from './modalbtn.component';


describe('ModalbtnComponent', () => {
  let component: ModalbtnComponent;
  let fixture: ComponentFixture<ModalbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
