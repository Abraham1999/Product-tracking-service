import {
  GET_PRODUCTS,
  PRODUCT_ERROR, 
  GET_PRODUCT,
  DELETE_PRODUCT
} from "./types";
import axios from 'axios'

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/product');
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}



export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/product/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const deleteProduct = id => async dispatch => {
  try {
     await axios.delete(`/product/delete/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
