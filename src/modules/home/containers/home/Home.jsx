import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

const Home = (props) => {
  const { loading } = props;

  return <div className="App">home</div>;
};

function mapStateToProps(state) {
  return {
    loading: state.home.productList.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
