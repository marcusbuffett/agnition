var Measure = require('./Measure');
var utils = require('../../utils/componentUtils');
var React = require('react');
var connect = require('react-redux').connect;


function mapStateToProps (state, ownProps) {
  return {
    depVars: utils.mapIdsToObjs(ownProps.depVarIds, state.DepVars),
  };
}

var DepVar = React.createClass({
  render: function() {
    return (
      <div>
        <div className= 'definition-set'>
          <span className='definition-label'>Effect: </span>
          <span className='definition'>{this.props.depVar.name}</span>
        </div>
          <Measure measureIds = {this.props.depVar.measures} />
      </div>
    );
  }
});

var DepVars = React.createClass({
  render: function() {
    return utils.divCollection(this.props.depVars, DepVar, 'depVar');
  }
});

module.exports = connect(mapStateToProps)(DepVars);
