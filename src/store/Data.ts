import { createAction } from '@reduxjs/toolkit';
import { StoreStateDataType } from '../types/store';

// types
const GET_STATE="data/GET_STATE";
const SET_STATE="data/SET_STATE";


// actions
export const getState = createAction<{
    getState: any
}>(GET_STATE)

export const setState = createAction<{
    [key: string]:any
}>(SET_STATE)


// reducer
export const initialDataState: StoreStateDataType = {
    sysdate: '',
    systime: '',
    title: 'Matching',
    currTab: 'socialMatch',
    isLogin: false,
    isMobile: true,
    stadiumInfo: undefined,
    matchListInfo: undefined
}

const dataReducer = (state= initialDataState, action: {
    type: string,
    payload?: any
}) => {
    switch (action.type) {
        case GET_STATE: case SET_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;