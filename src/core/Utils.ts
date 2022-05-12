class Utils {
    isMobile(): boolean {
        const user = navigator.userAgent;
        let isCheck = false;

        if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
            isCheck = true;
        }

        return isCheck;
    }
}

export default Utils.prototype;