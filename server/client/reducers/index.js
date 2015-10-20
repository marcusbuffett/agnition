import { combineReducers } from 'redux';
import Users from './Users';
import Dashboard from './Dashboard';
import Experiments from './Experiments';
import DepVars from './DependentVars';
import IndVars from './IndependentVars';
import Measures from './Measures';
import Samples from './Samples';
import Reminders from './Reminders';
import Requests from './Requests';

import { routerStateReducer as Router } from 'redux-router';
import Hypothesis from './Hypothesis';

module.exports = combineReducers({
  Router: Router,
  Users: Users,
  Dashboard: Dashboard,
  Hypothesis: Hypothesis,
  Experiments : Experiments,
  DepVars : DepVars,
  IndVars : IndVars,
  Measures : Measures,
  Samples : Samples,
  Reminders : Reminders,
  Requests : Requests,
});
