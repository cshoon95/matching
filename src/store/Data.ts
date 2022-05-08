import { createAction, ThunkDispatch } from '@reduxjs/toolkit';

// types
const GET_VALUE="data/GET_VALUE";

export const initialDataState = {
    stsdate: '',
    systime: '',
    title: 'Matching',
}