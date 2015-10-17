var Immutable = require('immutable');
var initialState = Immutable.Map({});

module.exports = function(state, action) {
  if (action.type === 'CREATE_EXPERIMENT') {
    return state.set('newExperiment', action.newExperiment);
  }
  else {
    return state;
  }
};
