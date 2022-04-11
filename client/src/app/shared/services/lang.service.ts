import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { langs } from '../constants/lang';
import { ge, en, ru } from '../constants/translate';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

const LOCAL_LANG_KEY = 'local-lang';

@Injectable()
export class LangService {

  languageStream: ReplaySubject<any> = new ReplaySubject();

  constructor(private cookieService: CookieService, private translateService: TranslateService) { }

  init() {
    const lang = this.getCurrent() || langs.EN;
    this.translateService.setTranslation(langs.EN, en);
    this.translateService.setTranslation(langs.GE, ge);
    this.translateService.setTranslation(langs.RU, ru);
    this.translateService.use(lang);
  }

  getCurrent() {
    return this.cookieService.get(LOCAL_LANG_KEY) || 'en';
  }

  getCurrentStram() {
    return this.languageStream;
  }

  use(lang) {
    this.translateService.use(lang);
    this.cookieService.set(LOCAL_LANG_KEY, lang);
    this.languageStream.next(lang);
  }

}