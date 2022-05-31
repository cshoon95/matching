import { createAction } from '@reduxjs/toolkit';
import { StoreStateViewType } from '../types/store';

// types
export const SHOW_LOADING="view/SHOW_LOADING";
export const HIDE_LOADING="view/HIDE_LOADING";


// action
export const showLoading = createAction<{
    loadingName?: string
}>(SHOW_LOADING)

export const hideLoading = createAction<{
    loadingName?: string
}>(HIDE_LOADING)


// reducer 
export const initialViewState: StoreStateViewType = {
    showLoadingName: ''
}

const viewReducer = (state = initialViewState, action: any) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                showLoadingName: action.payload.loadingName
            }
        case HIDE_LOADING:
            return {
                ...state,
                showLoadingName: ''
            }
        default:
            return state;
    }
}

export default viewReducer;