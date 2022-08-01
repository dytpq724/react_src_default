import { APIManager } from 'utils';
import ApiConstant from './ApiConstant';
const $http = new APIManager();

const Api = {

  //예시 - 올라운드
  /**
   * 카테고리 목록 조회
   * @returns
   */
  getCategoryList: async () => {
    try {
      const apiResult = await $http.get(ApiConstant.GET_CATEGORY);
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 장소 목록 조회
   *
   * @returns
   */
  getSightList: async () => {
    try {
      const apiResult = await $http.get(ApiConstant.GET_SIGHT);
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 장소 목록 상세 조회
   * @param {Number} sight_idx
   * @returns
   */
  getSightDetail: async (sight_idx) => {
    try {
      const apiResult = await $http.get(
        ApiConstant.SIGHT_IDX.replace(':sight_idx', sight_idx)
      );
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 코스 목록 조회
   * @returns
   */
  getCourseList: async () => {
    try {
      const apiResult = await $http.get(ApiConstant.GET_COURSE);
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 코스 목록 상세 조회
   * @param {Number} course_idx
   * @returns
   */
  getCourseDetail: async (course_idx) => {
    try {
      const apiResult = await $http.get(
        ApiConstant.COURSE_IDX.replace(':course_idx', course_idx)
      );
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 이미지 목록 조회
   * @returns
   */
  getImgList: async () => {
    try {
      const apiResult = await $http.get(ApiConstant.GET_IMG);
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 이미지 상세 목록 조회
   * @returns
   */
  getImgDetail: async (sight_idx) => {
    try {
      const apiResult = await $http.get(
        ApiConstant.IMG_IDX.replace(':sight_idx', sight_idx)
      );
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 별점 목록 조회
   * @returns
   */
  getScoreList: async () => {
    try {
      const apiResult = await $http.get(ApiConstant.GET_SCORE);
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  /**
   * 별점 목록 상세 조회
   * @param {Number} sight_idx
   * @returns
   */
  getScoreDetail: async (sight_idx) => {
    try {
      const apiResult = await $http.get(
        ApiConstant.SCORE_IDX.replace(':sight_idx', sight_idx)
      );
      const { status, message, data } = apiResult;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
export default Api;
