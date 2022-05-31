import { createAction } from '@reduxjs/toolkit';
import { StoreStateDataType } from '../types/store';

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