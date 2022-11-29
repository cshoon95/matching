import { createAction } from '@reduxjs/toolkit';
import { StoreStateViewType, AlertOptionsType, initAlertOptions, initLoadingOptions, initDropdownOptions } from '../types/store';

// types
export const SHOW_LOADING   = "view/SHOW_LOADING";
export const HIDE_LOADING   = "view/HIDE_LOADING";
export const SHOW_ALERT     = "view/SHOW_ALERT";
export const HIDE_ALERT     = "view/HIDE_ALERT";

// action
export const showLoading = createAction<{loadingName?: string;}>(SHOW_LOADING)
export const hideLoading = createAction<{loadingName?: string;}>(HIDE_LOADING)
export const showAlert = createAction<{
    message: string;
    options?: AlertOptionsType;
}>(SHOW_ALERT);
export const hideAlert = createAction(HIDE_ALERT);


// reducer 
export const initialViewState: StoreStateViewType = {
    alertMessage: '',
    alertOptions: initAlertOptions,
    loadingName: '',
    loadingOptions: initLoadingOptions,
    dropdownOptions: initDropdownOptions
}

const viewReducer = (state = initialViewState, action: any) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loadingName: action.payload.loadingName
            }
        case HIDE_LOADING:
            return {
                ...state,
                loadingName: ''
            }
        case SHOW_ALERT:
            const param: AlertOptionsType = action.payload.alertOptions;
            const options: AlertOptionsType = {
                title: (param && param.title) || '',
                confirm: (param && param.confirm) || '확인',
                color: (param && param.color) || 'success',
                compFunc: (param && param.compFunc) || (() => {}),
                callbackFunc:
                    (param && param.callbackFunc) || (() => {}),
            };
            return {
                ...state,
                alertMessage: action.payload.message,
                alertOptions: options
            };
        case HIDE_ALERT:
            return {    
                ...state,
                alertMessage: '',
                alertOptions: initAlertOptions
            };
        default:
            return state;
    }
}

export default viewReducer;