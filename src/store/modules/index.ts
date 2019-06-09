import { combineReducers } from 'redux';
import sidebar, { ISidebarState } from './sidebar';

export default combineReducers({
    sidebar,
});

// 스토어의 상태 타입 정의
export interface IStoreState {
  sidebar: ISidebarState;
}
