/**
 * Super and Override
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    // 해결방법: 생성자를 재정의하면 됨
    constructor(name, year, part) {
        super(name, year);
        // 부모클래스에 생성자가 있으니까 super 키워드로 부모 생성자 실행
        // 이 name, year은 부모 생성자에 들어가서 실행
        this.part = part;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);