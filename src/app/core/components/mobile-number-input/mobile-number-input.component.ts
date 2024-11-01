import {
  Component,
  EventEmitter,
  Input,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
} from '@angular/forms';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { Country } from 'ngx-intl-tel-input/lib/model/country.model';
import * as lpn from 'google-libphonenumber';
import { CountryCodeService } from 'src/app/core/services/country-code.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-mobile-number-input',
  templateUrl: './mobile-number-input.component.html',
  styleUrls: ['./mobile-number-input.component.scss'],
})
export class MobileNumberInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() label = '';
  @Input() submitted = false;
  @Input() addRequiredAstrect = false;
  @Input() placeholder: any = '';
  @Input() mobileNumberControlName = 'mobileNumber';
  @Input() style = '';
  @Input() readonly = false;
  @Output() selectedValue = new EventEmitter<any>();
  allCountries: Array<Country> = [];

  countryCodefilterValue: string = '';
  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  phoneUtil: any = lpn.PhoneNumberUtil.getInstance();
  selectedCountry?: Country = {
    name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    iso2: 'sa',
    dialCode: '966',
    priority: 0,
    htmlId: 'iti-0__item-sa',
    flagClass: 'iti__sa',
    placeHolder: '+966 11 234 5678',
  };
  preferredCountries: Country[] = [
    {
      name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
      iso2: 'sa',
      dialCode: '966',
      priority: 0,
      htmlId: 'iti-0__item-sa',
      flagClass: 'iti__sa',
      placeHolder: '+966 11 234 5678',
    },
  ];
  phoneNumberLength: number = 9;
  mobileNumberControl!: AbstractControl;
  filteredCountries: Country[] = [];
  mobileNumberControlError: string = '';

  constructor(
    private countryCodeData: CountryCodeService,
    private capitalizePipe: CapitalizePipe
  ) {
    this.fetchCountryData();
  }
  ngOnInit(): void {
    this.mobileNumberControl =
      this.formGroup.controls[this.mobileNumberControlName];
    this.onCountryCodeControlChange();
  }
  onCountryCodeControlChange() {
    this.formGroup.controls['countryCode'].valueChanges.subscribe({
      next: (data) => {
        if (data != this.selectedCountry?.dialCode) {
          this.selectedCountry = this.filteredCountries.find(
            (country) => country.dialCode == data
          );
          this.onCountryChange(false);
        }
      },
    });
  }

  onChange() {
    let errors: any = JSON.parse(
      JSON.stringify(this.mobileNumberControl.errors || {})
    );
    delete errors['pattern'];
    if (this.mobileNumberControl.value) this.mobileNumberControl.markAsDirty();
    if (this.mobileNumberControl.value?.length > 5) {
      try {
        const phoneNumber = lpn.PhoneNumberUtil.getInstance().parse(
          this.mobileNumberControl.value,
          this.selectedCountry?.iso2
        );

        if (
          !lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(
            phoneNumber,
            this.selectedCountry?.iso2
          )
        )
          errors['pattern'] = true;
      } catch (err) {}
    } else errors['pattern'] = true;
    if (Object.keys(errors).length === 0) errors = null;
    this.mobileNumberControl.setErrors(errors);
    this.getFirstMobileNumberControlError();
  }

  onCountryChange(resetMobileInput: boolean = true) {
    if (resetMobileInput) this.mobileNumberControl.setValue('');
    this.placeholder = this.selectedCountry?.placeHolder
      .split(' ')
      .join('-')
      .replace(`+${this.selectedCountry.dialCode}-`, '');
    this.phoneNumberLength = this.placeholder.split('-').join('').length;
    this.formGroup.controls['countryCode'].setValue(
      this.selectedCountry?.dialCode
    );
    this.onChange();
  }

  protected fetchCountryData(): void {
    this.allCountries = [];

    this.countryCodeData.allCountries.forEach((c) => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: (c[4] as string[]) || undefined,
        htmlId: `iti-0__item-${c[1].toString()}`,
        flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
        placeHolder: '',
      };

      country.placeHolder = this.getPhoneNumberPlaceHolder(
        country.iso2.toUpperCase()
      );

      this.allCountries.push(country);
    });
    this.allCountries = [...this.preferredCountries, ...this.allCountries];
    this.filteredCountries = [...this.allCountries];
  }

  protected getPhoneNumberPlaceHolder(countryCode: string): string {
    try {
      return this.phoneUtil.format(
        this.phoneUtil.getExampleNumber(countryCode),
        lpn.PhoneNumberFormat['NATIONAL']
      );
    } catch (e) {
      // @ts-ignore
      return e;
    }
  }
  getFirstMobileNumberControlError() {
    this.mobileNumberControlError = this.mobileNumberControl.errors
      ? Object.keys(this.mobileNumberControl.errors)[0]
      : '';
  }
  customFilterFunction() {
    this.filteredCountries = [...this.allCountries];

    this.filteredCountries = this.filteredCountries.filter((country) => {
      const str1 = this.capitalizePipe.transform(country.name);
      const str2 = this.capitalizePipe.transform(this.countryCodefilterValue);

      return (
        str1.includes(str2) ||
        country.dialCode.includes(this.countryCodefilterValue)
      );
    });
  }
}
