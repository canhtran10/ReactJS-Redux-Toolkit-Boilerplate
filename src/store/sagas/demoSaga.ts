import { put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { getSelectorDemos } from 'store/selectors/demo';
import { demoActions as actions } from 'store/slices/demo';
import { Demo } from 'types/Demo';
import { DemoErrorType } from 'store/types/demo';
import { EndPoint } from "../../services/EndPoint";
import { getList } from "../../services/Demo";

/**
 * Github repos request/response handler
 */
export function* getDemoData({payload}: any) {
  yield delay(500);
  const url = EndPoint.DEMO;
  try {
    const response = yield getList(payload);
    if(response && response.error.errorCode === 0) {
      yield put(actions.demoLoaded(response.data));
    } else {
      yield put(actions.demoError(response.data));
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* demoSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadDemosData.type, getDemoData);
}
