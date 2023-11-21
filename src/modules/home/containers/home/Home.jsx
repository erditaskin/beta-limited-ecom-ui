import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getProductList } from "modules/home/actions";
import { Typography } from "@mui/material";
import ProductList from "core/components/product/ProductList/ProductList";
import { useEffect } from "react";

const Home = (props) => {
  const { loading, productList, getProductList } = props;

  useEffect(() => {
    if (!loading && !productList) {
      getProductList();
    }
  }, [productList, loading, getProductList]);

  return (
    <div className="App">
      <Typography variant="h5" sx={{ paddingBottom: 3 }}>
        Fresh products, limited only
      </Typography>
      <ProductList data={productList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.home.productList.loading,
    productList: state.home.productList.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: () => dispatch(getProductList()),
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
