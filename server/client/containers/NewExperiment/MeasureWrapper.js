// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Measure = require('./Measure');


// import actions
var DepVarActions = require('../../actions/DepVars');
var MeasureActions = require('../../actions/Measures');
var ExpActions = require('../../actions/Experiments');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, ExpActions, DepVarActions, MeasureActions);

function mapStatetoProps (state, ownProps) {
  return {
    measureIds: state.DepVars.getIn([ownProps.depVarId, 'measures']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var MeasureWrapper = React.createClass({

  genComponent: function (event) {
    this.measureId = Math.floor(Math.random() * 1000000);
    this.props.actions.createMeasure(this.measureId);
    this.props.actions.addMeasure(this.measureId, this.props.depVarId);
  },

  render: function () {

    var components = this.props.measureIds.map(function(measureId) {
      return <Measure key={measureId} measureId={measureId} />;
    });
    return (
      <div>
        {components}
        <button onClick={this.genComponent}>add another measure</button>
      </div>
    );
  }

});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureWrapper);
