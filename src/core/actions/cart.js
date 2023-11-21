import { Api } from "core/services/api";

export const CART_VIEW_REQUEST = "@Cart/view/REQUEST";
export const CART_VIEW_SUCCESS = "@Cart/view/SUCCESS";
export const CART_VIEW_FAILED = "@Cart/view/FAILED";

export const CART_ADD_REQUEST = "@Cart/add/REQUEST";
export const CART_ADD_SUCCESS = "@Cart/add/SUCCESS";
export const CART_ADD_FAILED = "@Cart/add/FAILED";

export const viewCart = () => {
  return async (dispatch) => {
    dispatch({ type: CART_VIEW_REQUEST });
    return await Api.get("view-cart")
      .then((result) => {
        dispatch({
          type: CART_VIEW_SUCCESS,
          payload: result.data,
        });
      })
      .catch(
        dispatch({
          type: CART_VIEW_FAILED,
        })
      );
  };
};

export const addToCart = (productId, count) => {
  // Endpoint doesn't handle count
  return async (dispatch) => {
    dispatch({ type: CART_ADD_REQUEST });
    return await Api.post("add-to-cart?id=" + productId)
      .then((result) => {
        dispatch({
          type: CART_ADD_SUCCESS,
          payload: result.data,
        });
      })
      .catch(
        dispatch({
          type: CART_ADD_FAILED,
        })
      );
  };
};
