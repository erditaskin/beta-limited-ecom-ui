import { Api } from "core/services/api";

export const HOME_PRODUCT_LIST_REQUEST = "@Home/Product/list/REQUEST";
export const HOME_PRODUCT_LIST_SUCCESS = "@Home/Product/list/SUCCESS";
export const HOME_PRODUCT_LIST_FAILED = "@Home/Product/list/FAILED";

export const getProductList = () => {
  return async (dispatch) => {
    dispatch({ type: HOME_PRODUCT_LIST_REQUEST });
    return await Api.get("products")
      .then((result) => {
        dispatch({
          type: HOME_PRODUCT_LIST_SUCCESS,
          payload: result.data,
        });
      })
      .catch(
        dispatch({
          type: HOME_PRODUCT_LIST_FAILED,
        })
      );
  };
};
