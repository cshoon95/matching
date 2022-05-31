class Utils {
    isMobile(): boolean {
        const user = navigator.userAgent;

        if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) return true;

        return false;
    }
    sysdate(date: Date): string {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        return year + month + day;
    }
    systime(date: Date): string {
        const hours = ('0' + date.getHours()).slice(-2); 
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2); 

        return hours + minutes + seconds;
    }
    getDayArr(day: number): Date[] {
        const today = new Date();
        const endDate = new Date(today.setDate(today.getDate() + day));
        let arr: Date[]=[];
        
        for(let date=new Date(); date <= endDate; date.setDate(date.getDate()+1)) {
            arr.push(new Date(date));
        }
        
        return arr;
    }
}

export default new Utils();