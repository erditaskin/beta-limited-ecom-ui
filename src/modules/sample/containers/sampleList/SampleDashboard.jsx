import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

const SampleDashboard = (props) => {
  const { loading, data } = props;

  return <div className="App">sampledashboard</div>;
};

function mapStateToProps(state) {
  return {
    loading: state.sample.sampleList.loading,
    data: state.sample.sampleList.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SampleDashboard
);
