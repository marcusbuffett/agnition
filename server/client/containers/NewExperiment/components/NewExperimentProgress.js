import React, { Component } from 'react';
// import { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
var DepVar = require('../../../components/viewexperiment/DepVar');

function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.expId, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.expId, 'cause']),
    effect: state.Experiments.getIn([ownProps.expId, 'effect']),
    name: state.Experiments.getIn([ownProps.expId, 'name'])
    // depVars: state.Experiments.getIn([ownProps.expId, 'depVars']).toJS(),
    // indVars: state.Experiments.getIn([ownProps.expId, 'indVars']).toJS()
  };
}

var NewExperimentProgress = React.createClass({
  render: function() {
    return (
      <div className="col-md-6 col-sm-12">
      <h2>Experiment Summary</h2>
      <h3>Name : {this.props.name}</h3>
        <div className="progress">
          Hypothesis: {this.props.hypothesis}
        </div>
        <div className="progress">
          Cause: {this.props.cause}
        </div>
        <div className="progress">
          Effect: {this.props.effect}
        </div>
        {/*<div>
                  <h3>These are your dep variables</h3>
                  <DepVars depVars ={this.props.depVars}/>
                </div>
                <div>
                  <h3>These are your ind variables</h3>
                  <IndVars indVars ={this.props.indVars}/>
                </div>*/}
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
