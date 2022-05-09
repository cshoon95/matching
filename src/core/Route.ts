import { Mc } from "./Mc";
import queryString from "query-string";

export class Route {
    private mc!: Mc;
    public history:History = window.history;
    public historyStartLen: number = this.history.length;
    public pushStateArr: {
        type: string,
        name: string,
        param: any
    }[] = [];

    addEvent() {
        window.onpopstate = (event: any) => {
            if (event.state.type === 'page') {
                this.mc.store.dispatch(hidePopup({
                    modalName: 'all'
                }))

                const showPages = this.mc.store.getState().view.showPages;
                if (showPages[0] !== event.state.name) {
                    this.mc.store.dispatch(showPage({
                        pageName: event.state.name,
                        pageParam: event.state.param
                    }));
                }
            } else if (event.state.type === 'modal') {
                const showPopups = this.mc.store.getState().view.showPopups;
                this.mc.store.dispatch(hidePopup({
                    modalName: showPopups[showPopups.length-1]
                }))
            }
        }
    }

    historyBack() {
        this.history.back();
    }

    historyGo() {
        this.history.go();
    }
}