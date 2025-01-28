import {config, defaultLang, showDefaultLang} from './config';


export function useTranslatedPath(lang: keyof typeof config) {
    return function translatePath(path: string, l: string = lang) {
        return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
    }
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in config) return lang as keyof typeof config;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof config) {
    return function t(key: keyof typeof config[typeof defaultLang]) {
        return config[lang][key] || config[defaultLang][key];
    }
}
