import { createAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { StoreStateDataType } from '../types/store';
import Utils from "../core/Utils";

// types
const GET_VALUE="data/GET_VALUE";
const SET_VALUE="data/SET_VALUE";

// actions
export const getValue = createAction<{
    getValue: any
}>(GET_VALUE)

export const setValue = createAction<{
    [key: string]:any
}>(SET_VALUE)


// reducer
export const initialDataState: StoreStateDataType = {
    stsdate: '',
    systime: '',
    title: 'Matching',
    pages: [
        { type: 'page', step: 0, name: 'Register', title: '뭐로하지'}
    ],
    isLogin: false,
    isMobile: Utils.isMobile()
}

const dataReducer = (state= initialDataState, action: {
    type: string,
    payload?: any
}) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                ...action.payload
            }
        case GET_VALUE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;