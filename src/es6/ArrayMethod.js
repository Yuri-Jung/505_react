// ArrayMethod.js

//ES6에서 배열 관련함수가 추가됨

// forEach() : 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하는 함수. 반환값이 없음
// 사용법 :
// 배열명.forEach(콜백함수(현재값이 저장될 변수, 현재 index, 현재 배열 내용)){
//      실행할 소스코드
// }

// 사용 방법이 좀 다르지만 결과값은 동일하게 출력이 된다
const fruits = ['사과', '배', '복숭아'];
console.log('원본배열 : ' + fruits);

console.log('\n-----for문 사용시-----')
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
// 사과
// 배
// 복숭아
}

console.log('\n-----for~ in문 사용시------')
// key를 가져와 넣어줌(value아님)
for(const item in fruits){
    console.log(fruits[item])
}

console.log(' \n--------forEach문 사용시--------')
fruits.forEach(function (item){
    //fruits가 가지고 있는 데이터값을 item에다 넣어서 출력한다
    console.log(item);
    // 사과
    // 배
    // 복숭아
});


console.log('\n----forEach문 매개변수 여러개------ ')
fruits.forEach(function(item,index) {
    console.log(`index : ${index}, value : ${item}`);
//    ----forEach문 매개변수 여러개------
//   index : 0, value : 사과
//   index : 1, value : 배
//   index : 2, value : 복숭아
});

fruits.forEach(function (item,index,arrName){
    console.log(`current array : ${arrName}, index:${index}, value:{value}`)
//    current array : 사과,배,복숭아, index:0, value:{value}
//    current array : 사과,배,복숭아, index:1, value:{value}
//    current array : 사과,배,복숭아, index:2, value:{value}
});


// 많이 사용된다
// map() : forEach()와 같이 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하고 그 결과값을
//  배열로 반환하는 함수. map은 배열로 결과값을 반환해주지만 forEach()는 반환해주지 않는다.
// 사용법 :
// 배열명.map(콜백함수(현재값이 저장될 변수, 현재index, 사용한 배열명)){
//      실행할 소스코드
//      return 반환값
// }

console.log('\n-----map 사용--------\n');
const numbers = [4,9,16,25];
console.log(`원본 배열 : `);
console.log(numbers);

let data = numbers.map(function(item){
    console.log(`현재 값 : ${item}`);
    return item * 2;  //바로 return되는 것이 아니고 data에 배열로 쌓인다
//    리턴 값이 나오기 때문에 data처럼 받는 부분이 필요하다
});

console.log(`map 사용 후 데이터 : `);
console.log(data)

// 원본 배열 :
// [ 4, 9, 16, 25 ]
// 현재 값 : 4
// 현재 값 : 9
// 현재 값 : 16
// 현재 값 : 25
// map 사용 후 데이터 :
// [ 8, 18, 32, 50 ]

console.log('\n-------map()에서 매개변수 여러 개-----');

data = numbers.map(function(item,index) {
    console.log(`index : ${index}, value : ${item}`);
    return item * 2;
});

console.log('map 사용 후 데이터 : ');
console.log(data);

data = numbers.map(function (item, index,current){
    console.log(`current array : ${current}, index : ${index}, value:${item}`)
    return item * 2;
});

console.log('map 사용 후 데이터 : ');
console.log(data);
























