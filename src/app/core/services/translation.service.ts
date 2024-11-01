import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '../../core/enums/Lang';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  rtl: boolean = true;

  constructor(private translate: TranslateService) {}

  private get localStorageLang(): string {
    return localStorage.getItem('lang') || '';
  }

  private set localStorageLang(lang: string) {
    localStorage.setItem('lang', lang);
  }

  setDefaultLang(defaultLang: string = Lang.ar): void {
    const lang: string = this.localStorageLang
      ? this.localStorageLang
      : defaultLang;
    this.onChangeLang(lang);
  }

  switchLanguage(): void {
    if (this.translate.currentLang === Lang.ar) this.onChangeLang(Lang.en);
    else this.onChangeLang(Lang.ar);
  }

  private onChangeLang(lang: string): void {
    if (!lang) return;
    this.translate.use(lang);
    this.setDirection(lang);
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    this.localStorageLang = lang;
  }

  private setDirection(lang: string): void {
    this.rtl = lang === Lang.ar;
    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', lang === Lang.en ? 'ltr' : 'rtl');
  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}
