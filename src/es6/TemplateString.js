
//TemplateString.js

// ES6에서 새로 추가된 문자열 사용 방식
//``(백틱)기호 안에 문자열을 입력하는 방식
// `` 안에 ${변수명}을 사용하여 변수의 내용을 바로 출력하는 것이 가능
// ${} 내부에서 간단한 연산도 가능함

console.log('---------ES5 버전----------')

var string1 = '안녕하세요';
var string2='반갑습니다';

var greeting = string1 + ' ' + string2 //''를 제외하더라도 출력이 되긴함
console.log(greeting) //안녕하세요 반갑습니다

var product = {name :'도서', price :'4200원'}
var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다';
console.log(message); //제품  도서의 가격은 4200원

var multiLine = '문자열1\n문자열2';
console.log(multiLine);
// 문자열1
// 문자열2

var value1 = 20;
var value2 = 5;
var boolValue =false;
// var operator1 = '곱셈값은 ' +value1 * value2 + '입니다';
var operator1 ="곱셈값은 " + value1 * value2 + "입니다. ";
console.log(operator1)
var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다'
console.log(operator2);

console.log('-------ES6버전---------');

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`;
console.log(greeting);

var product = {name : ' 도서',price :'4200원'};
var message = `제품 ${product.name}의 가격은 ${product.price}`;
console.log(message);

var multiLine = `문자열1
문자열2`;
console.log(multiLine);

var value1 = 20;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다`;
console.log(operator1);
var operator2 = `불리언 값은 ${boolValue ? '참':'거짓'}입니다`;
console.log(operator2);










