import { Dispatch } from 'redux';
import { StoreStateViewType } from '../types/store';

// reducer 
export const initialViewState: StoreStateViewType = {
    
}

const viewReducer = (state = initialViewState, action: any) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default viewReducer;