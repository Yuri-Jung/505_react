// Class.js

// ES6에서부터 자바스크립트에서도 CLASS 키워드를 지원함
// constructor(매개변수) : 자바스크립트 클래스의 생성자, 자바스크립트의 생성자는 이름을 지정할 수 없음
// extends : 자바스크립트의 클래스도 상속을 지원함

class Shape{
    // 정적 멤버, 클래스명.정적멤버명으로 사용
    static create(x,y) {
        return new Shape(x,y);
    }
    //멤버 변수 선언
    //앞에 let,var 같은 것을 집어넣지 않는다.
    //앞에 것은 key이기 때문이다
    // var나 let, const 같은 키워드를 사용하지 않는다
    name = 'Shape';

    //메서드 선언
    move(x,y){
        this.x =x;
        this.y = y;
    }

    //생성자, 이름을 고정
    //생성자에서 this.변수명을 입력 시 멤버 변수가 선언이 된다
    constructor(x,y) {
        this.move(x,y);
    }



    area(){
        return 0;
    }
}

var s = new Shape(0,0);

s.area();
s.move(100,200);
console.log(s.name); //Shape
console.log(s.x); // 100
console.log(s.y); //200


var s1 = Shape.create(0,0);
s1.area();
s1.move(10,20)

console.log(s1.name); //Shape
console.log(s1.x); //10
console.log(s1.y);//20

//extends - 상속(shape를)
class Circle extends Shape {
    constructor(x,y,radius) {
        // this : 나 super :부모
        super(x,y);
        //멤버 변수 생성
        this.radius = radius;
    }

    area() {
        if(this.radius==0){
            return super.area();
        }
        return this.radius * this.radius;
    }
}

var c = new Circle(0,0,10);
console.log(c.area()); //100




















