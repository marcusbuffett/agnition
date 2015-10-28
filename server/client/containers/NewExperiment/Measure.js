// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

var MeasureQualitative = require('./MeasureQualitative');
var MeasureList = require('./MeasureList');
var MeasureNumeric = require('./MeasureNumeric');

// import actions
var MeasureActions = require('../../actions/Measures');
// var Actions = _.extend(MeasureActions);

function mapStatetoProps (state, ownProps) {
  return {
    kind: state.Measures.getIn([ownProps.measureId, 'kind'])
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(MeasureActions, dispatch)
  };
}

var Measure = React.createClass({

  handleClick: function (event) {
    this.props.actions.setKind(event.target.value, this.props.measureId);
  },

  render: function () {
    var measureKinds = {
      qualitative: (<MeasureQualitative key={this.props.measureId} measureId={this.props.measureId} />),
      numeric: (<MeasureNumeric key={this.props.measureId} measureId={this.props.measureId} />),
      list: (<MeasureList key={this.props.measureId} measureId={this.props.measureId} />)
    };
    return (
      <div className="measure">
        <button value="qualitative" onClick={this.handleClick}>Scale</button>
        <button value="numeric" onClick={this.handleClick}>Number</button>
        <button value="list" onClick={this.handleClick}>Categorical</button>
        {measureKinds[this.props.kind]}
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Measure);