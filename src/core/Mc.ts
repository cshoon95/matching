import { Store } from "redux";
import { initialDataState, setValue } from "../store/Data";
import { initialViewState } from "../store/View";
import { StoreStateType } from "../types/store";
import Utils from "./Utils";

type ValueType = keyof typeof initialDataState | keyof typeof initialViewState;

export class Mc {
    private _store!: Store;

    public get store() {
        return this._store;
    }

    public set store(inStore: Store) {
        this._store = inStore;
    }

    public get state(): StoreStateType {
        return this.store.getState();
    }

    public setValue(key: ValueType, value: any, reducerName?: string, isDispatch?: boolean): void {
        reducerName = reducerName || 'data';

        if (isDispatch) {
            this._store.dispatch(setValue({
                [key]: value
            }))
        } else {
            this._store.getState()[reducerName][key] = value;
        }
    }
}

const mc = (window as any).devmc = new Mc();
export default mc;