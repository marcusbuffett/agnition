var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Actions = require ('../../actions/IndVars');
var expActions = require('../../actions/Experiments');
Actions = _.extend(Actions,expActions);
var shortid = require('shortid');

//added in..
var IndVar = require('./IndVar');
var utils = require('../../utils/componentUtils');

function mapStateToProps (state, ownProps) {
  return {
    indVarIds: state.Experiments.getIn([ownProps.expId, 'indVars'])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
var IndVarWrapper = React.createClass({
  components: [],
  genComponent: function(event){
    var indVarId = shortid.generate();
    this.props.actions.createIndVar(indVarId);
    this.props.actions.addIndVar(indVarId, this.props.expId);
  },
  render: function(){
    // genComponent();
    return (
      <div>
        {this.props.indVarIds.map(function (indVarId) {
          return <IndVar indVarId = {indVarId} key = {indVarId} />
        })
        }
        <button onClick={this.genComponent} > add indvar </button>
      </div>
    )
  }
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(IndVarWrapper);
