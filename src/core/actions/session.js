import { Api } from "core/services/api";

export const SESSION_REQUEST = "@Session/REQUEST";
export const SESSION_SUCCESS = "@Session/SUCCESS";
export const SESSION_FAILED = "@Session/FAILED";

export const createSession = () => {
  return async (dispatch) => {
    dispatch({ type: SESSION_REQUEST });
    return await Api.get("createsession")
      .then((result) => {
        localStorage.setItem("Session-ID", result.data);
        dispatch({
          type: SESSION_SUCCESS,
          payload: result.data,
        });
      })
      .catch(
        dispatch({
          type: SESSION_FAILED,
        })
      );
  };
};
