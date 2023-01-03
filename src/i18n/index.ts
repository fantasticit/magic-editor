import zhCn from './zh-cn';
import enUs from './en-us';
import koKr from './ko-kr';

const locales = [zhCn, enUs, koKr];

export function getLocale(locales: any[]) {
  const language = navigator.language;
  const locale = locales.find(item => item.target.includes(language));
  return locale || enUs;
}

const locale = getLocale(locales);

export default function i18n(...args) {
  return args.reduce((prev, next) => {
    return prev[next] || '';
  }, locale);
}
i18n.locale = locale;
i18n.localeLangCountry = i18n('lang') + '-' + i18n('country');

//@ts-ignore
window.__me_i18n = i18n;
