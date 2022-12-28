// SpreadOperator.js

// 전개 연산자 (...)
// 나열형 자료를 추출하거나 연결할 때 사용
// 배열, 객체, 변수명 앞에 ... 기호를 사용하여 사용
// 배열 객체 함수 인자 표현식([]) 안에서만 동작함

console.log('------ES5------');
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
// 배열의 각 요소를 하나씩 추출하여 새로운 배열에 대입
console.log(combined) //[ 'one', 'two', 'three', 'four' ]

var combined = array1.concat(array2);
console.log(combined);
//[ 'one', 'two', 'three', 'four' ]
//[ 'one', 'two', 'three', 'four' ]

var combined = [].concat(array1, array2);
console.log(combined);
// [ 'one', 'two', 'three', 'four' ]
// [ 'one', 'two', 'three', 'four' ]
// [ 'one', 'two', 'three', 'four' ]
// 1번, 2번, 3번 형태가 동일하게 출력이 된다

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';  //false가 되면 뒤에 값 대입 (값이 없을 경우) array1은 0,1의 값만 존재한다
console.log(first); // one
console.log(second); //two
console.log(three); //empty

console.log('\n------ES6-----\n');

var array1 = ['one','two'];
var array2 = ['three', 'four'];

var combined = [...array1, ...array2]; //[]저장할 데이터가 오른쪽에 위치
console.log(combined); // [ 'one', 'two', 'three', 'four' ]

//전개 연산자
var [first, second, three = 'empty', ...others] = array1; //three = 'empty' : three 값이 없기 때문에 empty로 기본값 준다
//others: 남아있는 데이터를 몰아주기
console.log(first); //one
console.log(second); //two
console.log(three); //empty
console.log(others); // []

var [first, seocnd] = [second, first]; //second의 데이터를 first에 넣어주고 first의 데이터를 second에 넣어준다. swape

// 예전 서로 값을 바꾸기 위해서는 변수 3개가 필요했따
var first = 10;
var second = 20;
var tmp = 10;

tmp = first;
first = second;
second = tmp;


// 잘못 사용한 예
// var wrongArr = ...array1; 전개 연산자는 대괄호 안에서만 동작한다 [...array1]
