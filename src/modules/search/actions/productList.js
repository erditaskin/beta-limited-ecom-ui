import { Api } from "core/services/api";

export const SEARCH_PRODUCT_LIST_REQUEST = "@Search/Product/list/REQUEST";
export const SEARCH_PRODUCT_LIST_SUCCESS = "@Search/Product/list/SUCCESS";
export const SEARCH_PRODUCT_LIST_FAILED = "@Search/Product/list/FAILED";

export const getSearchProductList = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_PRODUCT_LIST_REQUEST });
    return await Api.get("search?name=" + query)
      .then((result) => {
        dispatch({
          type: SEARCH_PRODUCT_LIST_SUCCESS,
          payload: result.data,
        });
      })
      .catch(
        dispatch({
          type: SEARCH_PRODUCT_LIST_FAILED,
        })
      );
  };
};
