import { Store } from "redux";
import { initialDataState, setValue } from "../store/Data";
import { initialViewState } from "../store/View";
import { StoreStateType } from "../types/store";

type ValueType = keyof typeof initialDataState | keyof typeof initialViewState;

export class Mc {
    private _store!: Store;
    
    public init(inStore: Store, param: { firstPage: string }) {
        this._store = inStore;
    }

    public get store() {
        return this._store;
    }

    public set store(inStore: Store) {
        this._store = inStore;
    }

    public get state(): StoreStateType {
        return this.store.getState();
    }
    
    public getValue(key: ValueType) {
        return this._store.getState()['data'][key];
    }

    public setValue(key: ValueType, value: any): void {
        this._store.dispatch(setValue({ [key]: value }));
    }
}

const mc = (window as any).devmc = new Mc();
export default mc;