class Utils {
    isMobile(): boolean {
        const user = navigator.userAgent;
        let isCheck = false;

        if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
            isCheck = true;
        }

        return isCheck;
    }
    sysdate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);

        return year + month + day;
    }
    systime(): string {
        const today = new Date();   
        const hours = ('0' + today.getHours()).slice(-2); 
        const minutes = ('0' + today.getMinutes()).slice(-2);
        const seconds = ('0' + today.getSeconds()).slice(-2); 
        
        return hours + minutes + seconds;
    }
}

export default Utils.prototype;