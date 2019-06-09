import { createAction, handleActions } from 'redux-actions';

const TOGGLE = 'sidebar/TOGGLE';

export const actionCreators = {
    toggleSidebar: createAction(TOGGLE),
};

export interface ISidebarState {
    sidebarOpened: boolean;
}

const initialState: ISidebarState = {
    sidebarOpened: false,
};

export default handleActions<ISidebarState>(
    {
        [TOGGLE]: (state) => ({ sidebarOpened: !state.sidebarOpened }),
    },
    initialState,
);
