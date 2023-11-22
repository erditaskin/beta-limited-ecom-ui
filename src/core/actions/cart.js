import { Api } from "core/services/api";

export const CART_VIEW_REQUEST = "@Cart/view/REQUEST";
export const CART_VIEW_SUCCESS = "@Cart/view/SUCCESS";
export const CART_VIEW_FAILED = "@Cart/view/FAILED";

export const CART_ADD_REQUEST = "@Cart/add/REQUEST";
export const CART_ADD_SUCCESS = "@Cart/add/SUCCESS";
export const CART_ADD_FAILED = "@Cart/add/FAILED";

export const CART_SHOW = "@Cart/Open/SHOW";
export const CART_HIDE = "@Cart/Open/HIDE";

export const CART_DELETE_PRODUCT = "@Cart/Delete/PRODUCT";

export const getCartItems = () => {
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
      .then(() => {
        dispatch({
          type: CART_ADD_SUCCESS,
        });
      })
      .catch(
        dispatch({
          type: CART_ADD_FAILED,
        })
      );
  };
};

export const toggleCart = (open) => {
  return async (dispatch) => {
    dispatch({ type: open ? CART_SHOW : CART_HIDE });
  };
};

export const deleteCartItem = (productId) => {
  // Since endpoint has not been granted for this action only substraction from feed will be solution
  // When new request made for view cart products, removed items will be restored
  return async (dispatch) => {
    dispatch({
      type: CART_DELETE_PRODUCT,
      payload: productId,
    });
  };
};
