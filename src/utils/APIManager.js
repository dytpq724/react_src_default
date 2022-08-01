import axios from 'axios';
import { getCookie } from 'utils';

export default class ApiManager {
  /**
   *
   */
  constructor() {
    // 싱글톤 변수 할당
    if (!ApiManager.instance) {
      // Axios모듈
      this.http = axios.create();
      // 타임아웃 설정
      this.http.defaults.timeout = 5500;
      // 싱글톤 인스턴스
      ApiManager.instance = this;
      //test url
    }
    return ApiManager.instance;
  }

  /**
   *
   */
  setHeaders = (headers = {}) => {
    this.headers = {
      ...this.headers,
      headers,
    };
  };

  /**
   *
   */
  getHeaders = () => {
    this.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
      mode: 'no-cors',
      'Access-Control-Allow-Origin': '*',
      //   'Content-Type': 'application/json;',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      //   Authorization: `Bearer ${getCookie('ACCESS_TOKEN')}`,
      //   Authorization: `Bearer ${getCookie('NAYOGI_ACCESS_TOKEN')}`,
    };
    return this.headers;
  };

  /**
   * NOTE Usualy Arrow function, return has same line.
   */
  get = (url, params = null) => this.getRequest(url, 'GET', params);

  /**
   * GET & DELETE
   */
  getRequest = async (url, method = 'GET', params) => {
    try {
      const headers = this.getHeaders();
      const queryString = this._jsonToQueryString(params);
      //   const response = await fetch(`${url}${queryString}`, {
      //   const response = await this.http.get(`${url}${queryString}`, {
      const response = await this.http.get(`${url}${queryString}`, {
        method,
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('error: ', error);
      return {
        code: 500,
        message: error,
      };
    }
  };

  /**
   * 쿼리스트링 파라미터 만들기
   * --
   */
  _jsonToQueryString = (params = null) => {
    // cno는 필수 파라미터 - 기본값
    let queryString = ``;
    // 파라미터가 있는경우
    if (params) {
      const keys = Object.keys(params);
      if (keys.length > 0) {
        for (let ii in keys) {
          queryString += `&${keys[ii]}=${params[keys[ii]]}`;
        }
        return `?${queryString.slice(1)}`;
      }
    }
    return ``;
  };
}
