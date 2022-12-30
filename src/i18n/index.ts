import zhCn from './zh-cn';
import enUs from './en-us';
import koKr from './ko-kr';

const locales = [zhCn, enUs, koKr];

function getLocale() {
  const language = navigator.language;
  const locale = locales.find(item => item.target.includes(language));
  return locale || enUs;
}

const locale = getLocale();

export default function i18n(...args) {
  return args.reduce((prev, next) => {
    return prev[next] || '';
  }, locale);
}
i18n.locale = locale;
i18n.localeLangCountry = i18n('lang') + '-' + i18n('country');
window.__me_i18n = i18n;
