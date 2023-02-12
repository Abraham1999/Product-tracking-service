import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  GET_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/types';

const initialState = {
  product: null,
  products: [],
  loading: true,
  error: {},
};

export default function Product(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
