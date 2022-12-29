
//ArrowFunction.js

// 화살표 함수 : ES6 버전부터 사용되는 함수를 선언하는 새로운 방식
// ES5 버전의 익명함수를 사용하여 함수를 생성하는 방식에서 변경되어 function 키워드를 생략하고
// 매개변수와 코드블럭 사이에 '=>' 기호를 사용하는 방식
// 소스코드가 반환값 한 줄일 경우 코드 블럭을 생략할 수 있다(return 키워드도 생략가능하다)
// 매개변수가 한 개인 경우, 매개변수의 괄호를 생략할 수 있다

// 사용방법 :
// 변수명 = (매개변수1, 매개변수2, ...) => {
//      실행할 소스코드
//      return 반환값
// }

// 변수명 = (매개변수1, 매개변수2, ...) => 반환값;
// 변수명 = 매개변수 => 반환값;
// 변수명 = () => 반환값;


//기존 함수 생성 선언 방식 1

function es5Func1(a, b){
    console.log(a + b);
    return a + b;
}

// 기존 함수 선언 방식2
// 익명함수. 주로 콜백함수에서 많이 사용됨
// 변수에 넣어줌. 함수, 클래스 등 모든 데이터를 넣을 수 있다

var es5Func2 = function(a, b) {
    console.log(a+b);
    return a+b;
}

es5Func1(10,20); // 30
es5Func2(100,200); //300

let data = es5Func1(10,20);
console.log(data);
data = es5Func2(100,200);
console.log(data);

console.log('\n-----es6 방식-----');

// 화살표 함수 선언
const es6Func1 = (a,b) => {
    console.log(a+b);
    return a+b;
}

data = es6Func1(50,20); // 70
console.log(`리턴 받은 값 : ${data}`); // 리턴 받은 값 : 70

const es6Func2 = (a,b) =>  a+b
data = es6Func2(100,200);
console.log(`리턴 받은 값 : ${data}`); //리턴 받은 값 : 300

const es6Func3 = (a,b) => console.log(a+b);
es6Func3(10,20) // 30

// 매개변수가 하나면 괄호 생략 가능
// 매개변수가 없을 때는 반드시 ()가 있어야 한다.
const es6Fun4 = (a) => a * 2;
data = es6Fun4(10)
console.log(`리턴 받은 값 : ${data}`); //리턴 받은 값 : 20

const es6Fun5 = a => a * 5;
data = es6Fun5(10);
console.log(`리턴 받은 값 : ${data}`);


const es6Fun6 = () => console.log('es6Func6() 실행');
es6Fun6();














