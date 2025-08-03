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

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // 파라미터는 무조건 1개를 받음
    set name/*보통 바꾸고 싶은 프로퍼티 이름과 겹치게 함*/(name) {
        this.name = name;
        // name값을 받아서 현재 인스턴스 name에 저장함
    }
}

const yuJin = new IdolModel('안유진', 2003);

// setter 사용방법
yuJin.name = '장원영';
console.log(yuJin);
