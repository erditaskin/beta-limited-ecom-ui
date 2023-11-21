import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getSearchProductList } from "modules/search/actions";
import { Typography } from "@mui/material";
import ProductList from "core/components/product/ProductList/ProductList";
import { useEffect } from "react";

const Search = (props) => {
  const { loading, productList, getSearchProductList, match } = props;
  const query = match?.params?.query;

  useEffect(() => {
    if (!loading && query?.length > 2) {
      getSearchProductList(query);
    }
  }, [loading, query, getSearchProductList]);

  return (
    <div className="App">
      <Typography variant="h5" sx={{ paddingBottom: 3 }}>
        Search Results For : {query}
      </Typography>
      <ProductList data={productList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.search.productList.loading,
    productList: state.search.productList.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchProductList: (query) => dispatch(getSearchProductList(query)),
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Search);
