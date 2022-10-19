import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import store from './store';

export type RootStateProps = ReturnType<typeof store.getState>;
export type AppDispatchProps = typeof store.dispatch;
export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action, // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R;
