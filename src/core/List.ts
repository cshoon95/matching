class List {
    area() {
        return [{ code: '01', label: '모든지역'},
                { code: '02', label: '서울'},
                { code: '03', label: '경기/강원'},
                { code: '04', label: '인천'},
                { code: '05', label: '대전/세종/충청'},
                { code: '06', label: '대구/경북'},
                { code: '07', label: '부산/울산/경남'},
                { code: '08', label: '광주/전라'},
                { code: '09', label: '제주'}];
    }
    gender() {
        return [{ code: '01', label: '남자'},
                { code: '02', label: '여자'},
                { code: '03', label: '남녀 모두'}];
    }
    level() {
        return [{ code: '01', label: '비기너3 이하'},
                { code: '02', label: '아마추어2 이상'},
                { code: '03', label: '일반'}];
    }
}

export default List.prototype;