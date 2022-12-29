
// Destructuring.js

// 확장표현식
// ES6 버전에서 추가된 object 타입의 사용방식

console.log('----ES5----');
var x = 0;
var y = 0;
var obj = {x:x, y:y}; //object 타입의 변수 생성 ->{}들어가면 object 타입 // 앞의 건 key, 뒤의 건 value
console.log(obj); //{ x: 0, y: 0 }

var randomKeyString = 'other';
var combined = {}; //빈 object 타입 생성
combined['one' + randomKeyString] = 'some value'; // oneother가 됨 두개 합쳐서 -> value는 some value이다
console.log(combined); //{ oneother: 'some value' }


// 밑에 꺼 하고 난 뒤 추가된 부분
var obj2 = {
    methodA: function () {console.log('A');}, //key에 함수를 넣을 수 있다
    methodB: function () {return 0;} // 값을 주지 않았다
};

console.log(obj2); //{ methodA: [Function: methodA], methodB: [Function: methodB] }
obj2.methodA(); // A
obj2.methodB(); // 출력되는 값이 없다



console.log('----ES6----');
var x = x;
var y = y;
// object 생성 시 키를 설정하지 않으면 변수명이 키값으로 설정됨 {x,y}만 해놓으면 key와 변수명 자동 지정


var obj = {x,y};
console.log(obj); //{ x: 0, y: 0 }

var randomKeyString = 'other';
// ES6에서는 object 타입 생성 시 대입 연산자 오른쪽에서 바로 키와 값을 설정하여
// object 타입에 데이터를 추가하는 것이 가능
var combined = {['one' + randomKeyString]: 'some value'};
console.log(combined); // { oneother: 'some value' }

var obj2 = {
    methodA() {console.log('A');},
    methodB() {return 0;}
};
console.log(obj2); //{ methodA: [Function: methodA], methodB: [Function: methodB] }
obj2.methodA(); //A
obj2.methodB(); // 결과값없음

console.log('\n----구조분해할당-----\n');
console.log('----ES5------');

var list = [0,1];
var item1 = list[0]; //list의 0번째 값
var item2 = list[1]; // list의 1번째 값
var item3 = list[2] || -1;  //기본값 설정 (아이템 값이 없다면 -1을 대입하라)
console.log(item1); // 0
console.log(item2); // 1
console.log(item3); // -1

var temp = item2;
item2 = item1;
item1 = temp;
console.log(item1); // 1
console.log(item2); // 0

var obj={
    key1 : 'one',
    key2: 'two'
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = key1;
console.log(key1); //one
console.log(key2); //two
console.log(key3); //default key3 value


console.log('\n----ES6----\n');

var list = [0,1];
// 대입 연산자 왼쪽에 []를 사용하여 그 안에 배열을 쓰듯이 변수명을 입력하면 대입 연산자 오른쪽의 데이터를
// 하나씩 꺼내어 대입 연산자 왼쪽의 변수명에 각각 저장됨
var [item1, item2, item3 = 1] = list; //var [item1, item2, item3 = 1] = [0,1] 3번째 값 없으니까 1을 기본값으로 준다
console.log(item1); // 0
console.log(item2); // 1
console.log(item3); // 1

// 확장 표현식을 사용하여 임시 변수 없이 2개의 변수의 값을 서로 변경함
[item2, item1] = [item1, item2];
console.log(item1); // 1
console.log(item2); // 0


// 배열의 확장 표현식과 동일하게 object 타입에서도 사용이 가능함
// 대입 연산자 왼쪽에 {}을 사용하고 변수명을 입력하면, 대입 연산자 오른쪽의 object 타입의
// 키와 같은 변수명에 데이터를 저장함

// 키의 이름을 생략 시 변수명을 키이름으로 사용한다는 원리를 이용함.
// 콜론 뒤의 변수명들을 새 변수명으로 지정한다. newKey1, key2, key3
// 세미콜론(:) 기호를 사용할 때 새로운 변수명으로 적용
// = 기호 사용시 기본값으로 설정
var {key1 : newKey1, key2, key3 = 'default key3 value'} = obj; //{key1:'one', key2:'two'}
console.log(newKey1); //one
console.log(key2); //two
console.log(key3); // default key3 value


// ... 전개연산자 나머지 값을 넣어준다.
// 데이터 지정 타입에 맞게 전개연산자 값이 나온다.
var [item,...otherItems] = [0,1,2];
console.log(item); // 0
console.log(otherItems); // [1,2] 배열로 저장되어있다

var {key1, ...others} = {key1:'one', key2: 'two'};
console.log(key1);// one
console.log(others); // { key2: 'two' } //object 형식으로 받아준다













