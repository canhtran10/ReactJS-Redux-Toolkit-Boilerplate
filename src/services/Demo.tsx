import {EndPoint} from './EndPoint';
import {callApi} from './Api';
import {querystring} from "../utils/helpers";

/**
 * call api get list
 */
export function* getList(payload: any) {
  let params = {

  };
  const data = yield callApi(EndPoint.DEMO + querystring(params), 'GET', params);
  console.log('getList', data)
  return data;
}