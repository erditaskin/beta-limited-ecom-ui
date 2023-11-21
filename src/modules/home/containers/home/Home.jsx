import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

const Sample = (props) => {
  const { loading, sampleForm } = props;

  return <div className="App">home</div>;
};

function mapStateToProps(state) {
  return {
    loading: state.sample.sample.loading,
    sampleForm: state.sample.sampleForm,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sample);
