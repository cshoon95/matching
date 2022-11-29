export type StoreStateType = {
    data: StoreStateDataType;
    view: StoreStateViewType;
}

export type StoreStateDataType = {
    sysdate: string,
    systime: string,
    title: string,
    currTab: string,
    isLogin: boolean,
    isMobile: boolean
    stadiumInfo?: [Stadium],
    matchListInfo?: [Match]
}

export type StoreStateViewType = {
    alertMessage: string;
    alertOptions: AlertOptionsType;
    loadingName: string;
    loadingOptions: LodingOptionsType;
    dropdownOptions: DropdownOptionsType;
}

export type AlertOptionsType = {
    title: string;
    confirm: string;
    color: 'error' | 'info' | 'success' | 'warning';
    compFunc: Function;
    callbackFunc: Function;
}

export type LodingOptionsType = {
    color:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
    disableShrink: boolean;
    size: number | string;
    thickness: number;
}

export type DropdownOptionsType = {
    id: string,
    title: string;
    titleEn: string;
    items: [{code: string, label: string}]
    onChange: Function;
}

// init
export const initAlertOptions: AlertOptionsType = {
    title: '',
    confirm: '확인',
    color: 'success',
    compFunc: () => {},
    callbackFunc: () => {},
};

export const initLoadingOptions: LodingOptionsType = {
    color: 'primary',
    disableShrink: false,
    size: 40,
    thickness: 3.6,
};

export const initDropdownOptions: DropdownOptionsType = {
    id: '',
    title: '',
    titleEn: '',
    items: [{code: '', label: ''}],
    onChange: () => {}
}

type Stadium = {
    SUM_YY: string,
    SIGUN_NM: string,
    FACLT_NM: string,
    COMPLTN_YY: string,
    POSESN_INST_NM: string,
    MANAGE_MAINBD_NM: string,
    BOTM_MATRL_NM: string,
    BT: string,
    COMPRT_CNT: string,
    AR: string,
    LENG: string,
    TOT_AR: undefined | string,
    BUILD_AR: undefined | string,
    PLOT_AR: string,
    CONSTR_BIZ_EXPN: string,
    ACEPTNC_PSNCNT: undefined | string,
    AUDTRM_SEAT_CNT: undefined | string,
    SEAT_FORM_NM: undefined | string,
    BUILD_RSCU_NM: undefined | string,
    RM_MATR: undefined | string,
    REFINE_ZIPNO: undefined | string,
    REFINE_LOTNO_ADDR: undefined | string,
    REFINE_ROADNM_ADDR: undefined | string,
    REFINE_WGS84_LAT: undefined | string,
    REFINE_WGS84_LOGT: undefined | string
}

type Match = {
    time: string,
    stadiumInfo: Stadium,
    numbers: number,
    level: string
}