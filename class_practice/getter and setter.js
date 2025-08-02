class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.name = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */

    get nameAndYear() {
        // get 키워드쓰고 함수 정의하듯이 쓰면 됨
        return `${this.name}-${this.year}`;
    }
}

const yuJin = new IdolModel('안유진', 2003);

/**
 * 함수처럼 정의했지만, get 키워드를 쓰면
 * 하나의 변수, 오브젝트 키 값처럼 사용함.
 */
console.log(yuJin.nameAndYear); // 안유진-2003
