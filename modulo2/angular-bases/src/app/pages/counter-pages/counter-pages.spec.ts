import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterPages } from './counter-pages';

describe('CounterPages', () => {
  let component: CounterPages;
  let fixture: ComponentFixture<CounterPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPages],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
