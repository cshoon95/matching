import { createAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { StoreStateDataType } from '../types/store';
import mc from "../core/Mc";

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
    sysdate: mc.utils.sysdate(new Date()),
    systime: mc.utils.systime(new Date()),
    title: 'Matching',
    currTab: 'socialMatch',
    isLogin: false,
    isMobile: mc.utils.isMobile(),
    stadiumInfo: undefined
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