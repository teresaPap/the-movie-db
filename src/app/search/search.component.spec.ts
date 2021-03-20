import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
      ],
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchForm', () => {
    it('should be valid when the keyword input is valid', () => {
      let keywordField = component.searchForm.controls['keyword'];
      const validKeywords = ['abc', 'ab1', 'abcd', 'ab12', '123', '12a'];

      validKeywords.forEach((keyword) => {
        keywordField.setValue(keyword);
        expect(component.searchForm.valid).toBeTrue();
      });
    });

    it('should be invalid when the keyword input is invalid', () => {
      let keywordField = component.searchForm.controls['keyword'];
      const invalidKeywords = ['!', '!@', '!@#', 'a', 'ab', 'ab!', '1', '12', '12!', 'a1!', 'ab12!'];

      invalidKeywords.forEach((keyword) => {
        keywordField.setValue(keyword);
        expect(component.searchForm.valid).toBeFalse();
      });
    });

    // it('should not be submitted when empty', () => {
    //   // todo
    // });
  });
});
