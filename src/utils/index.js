// export const BUCKET_URL = 'https://store.allroundkorea.ml';
export const HOST = process.env.REACT_APP_HOST;
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export { default as APIManager } from './APIManager';

/**
 * 쿠키찾기
 * --
 */
export const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? value[2] : null;
};

/**
 * 쿠키저장
 */
export const setCookie = (name, value, callback = false) => {
  window.document.cookie = `${name}=${value}; path=/`;
  if (callback) callback();
};

/**
 * 쿠키삭제
 */
export const removeCookie = (name, value, d) => {
  const t = new Date();
  d = d === '' ? '' : '; expires=' + t.setDate(t.getDate() + d);

  document.cookie =
    name +
    '=' +
    escape(value) +
    '; path=/' +
    (d ? '; expires=' + t.toGMTString() : '');
};

/**
 * 쿠키삭제
 */
export const deleteCookie = (name, { path, domain }) => {
  if (getCookie(name)) {
    window.document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};
