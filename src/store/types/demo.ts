import { Demo } from 'types/Demo';

/* --- STATE --- */
export interface DemoType {
  data: Demo[];
  error?: DemoErrorType | null;
  loading?: boolean
}

export enum DemoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = DemoType;