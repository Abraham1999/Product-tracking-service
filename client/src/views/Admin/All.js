import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions/product";
import AllTable from "./AllTable";

const All = ({ getProducts, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log(products)
  return (
    <> 
      <AllTable products={products} />
    </>
  );
};

All.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(All);
