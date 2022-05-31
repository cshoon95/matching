import { Store } from "redux";
import { StoreStateType } from "../types/store";
import { initialDataState, setValue } from "../store/Data";
import { initialViewState, showLoading, hideLoading } from "../store/View";
import Server from "./Server";
import Utils from "./Utils";
import List from "./List";

export type ValueType = keyof typeof initialDataState | keyof typeof initialViewState;

export class Mc {
    private _store!: Store;
    
    public init(inStore: Store, param: { firstPage: string }) {
        this._store = inStore;
    }

    public get store() {
        return this._store;
    }

    public set store(inStore: Store) {
        this.store = inStore;
    }

    public get state(): StoreStateType {
        return this.store.getState();
    }
    
    public get server() {
        return Server;
    }

    public get utils() {
        return Utils;
    }

    public get list() {
        return List;
    }

    public getValue(key: ValueType) {
        return this.store.getState()['data'][key];
    }

    public setValue(key: ValueType, value: any): void {
        if(!this.store)return;
        this.store.dispatch(setValue({ [key]: value }));
    }
    
    public showLoading(name: string ='normal') {
        if (!this.store) return;
        this.store.dispatch(showLoading({
            loadingName: name
        }))
    }

    public hideLoading(name: string ='normal') {
        if (!this.store) return;
        this.store.dispatch(hideLoading({
            loadingName: name
        }))
    }
}

const mc = (window as any).devmc = new Mc();
export default mc;