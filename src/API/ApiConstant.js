// import { BASE_URL } from 'utils';

/**
 *  API
 * --
 */

const get_post = {
  //SECTION 
  /**
   * @method POST
   * @param
   */
  GET_IMG: `${BASE_URL}/get_post_url`,
  /**
   * @method POST
   * @param
   */
  IMG_IDX: `${BASE_URL}/get_post_url/:primary_idx`,
};

const ApiConstant = {
  // SECTION get
  ...get_post,
};

export default ApiConstant;
