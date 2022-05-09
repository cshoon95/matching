import { createAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { initialViewState } from './View';

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


export const initialDataState = {
    stsdate: '',
    systime: '',
    title: 'Matching',
}

const dataReducer = (state= initialDataState, action: {
    type: string,
    payload: any
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
    }
}