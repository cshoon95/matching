import { Store } from "redux";
import { StoreStateType, AlertOptionsType } from "../types/store";
import { initialDataState, setState } from "../store/Data";
import { initialViewState, showLoading, hideLoading, showAlert, hideAlert } from "../store/View";
import Server from "./Server";
import Utils from "./Utils";
import List from "./List";

export type StateType = keyof typeof initialDataState | keyof typeof initialViewState;

export class Mc {
    private _store!: Store;
    
    public init(inStore: Store) {
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

    public getState(key: StateType, type: string = 'data') {
        return this.store.getState()[type][key];
    }

    public setState(key: StateType, value: any): void {
        if(!this.store)return;
        this.store.dispatch(setState({ [key]: value }));
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

    public alert(message: string, options?: AlertOptionsType) {
        if (message === 'hide') {
            this.store.dispatch(hideAlert());
        } else {
            this.store.dispatch(
                showAlert({
                    message,
                    options: options,
                }),
            );
        }
    }

    public log(message: any) {
        console.log(message);
    }

    public warnLog(message: any) {
        console.warn(message);
    }

    public infoLog(message: any) {
        console.info(message);
    }

    public groupLog(messages: Array<any>) {
        console.group();
        messages.map(message => console.log(message));
        console.groupEnd();
    }

    public timeLog(message: any, func: Function) {
        console.time(message);
        func();
        console.timeEnd(message);
    }
}

const mc = (window as any).devmc = new Mc();
export default mc;