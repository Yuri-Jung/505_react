// Promise.js
// 제일 어렵다고 하셨음!
// 자바스크립트에서 비동기 함수의 동기 처리를 하기 위해서 사용하는 객체
// 비동기 함수와 콜백에 대한 개념이 있어야 한다

// 자바스크립트는 기본적으로 1 thread(쓰레드) 비동기 처리 방식을 사용하고 있다.

// thread란 프로그램이 실행되는 최소 단위.-> 한 줄 씩 내려가면서 실행하도록 도와줌
// 자바는 multi-thread를 제공해주고 있다 초급자는 multi-thread를 사용하면 안된다. 데드락이 일어날 수 있음
// 데드락 : 서로 연관된 걸 사용하고 있으면 서로 종료가 되지 않아 멈춰 있는 현상
// 프로그래밍 경험이 많은 사람들이 멀티스레드를 사용하는 편

// 자바스크립트에서 순차적으로 실행을 하고 싶을 경우 콜백 함수를 이용해야 한다
// 순차적으로 실행할 것이 많아지게 되면 콜백지옥이라고 불리는 형태가 만들어지게 됨
// 프로미스는 이러한 콜백 지옥을 해결하기 위해서 사용하는 객체


// react를 사용한다는 건 스프링 부트에서 데이터만 던져주고 리액트가 데이터를 받아 화면에 보여주는 형식
// 다 ajax를 사용하면서 서로 통신함 대표적인 비동기방식
// 그렇기 때문에 promise를 알아야 한다.

//프로미스에는 preding, fulfilled, rejected 3가지 상태가 존재함
// pending : 대기 상태, 비동기 함수가 실행되고, 아직 처리가 완료되지 않은 상태
// fulfilled : 완료 상태. 비동기 함수가 실행된 후 정상적으로 처리가 완료된 상태
// rejected : 거부상태, 비동기 함수가 실행된 후 오류가 발생한 상태

// 프로미스 실행 시 콜백함수가 실행되고, 해당 콜백함수의 매개변수로 resolve(), reject()라는 함수를 제공함
// resolve(매개변수) : 프로미스 실행 후 fulfilled 상태일 경우 실행하는 함수로 나중에 then()함수를 제공함
// reject(매개변수) : 프로미스 실행 후 rejected 상태일 경우 실행하는 함수로 나중에 catch() 함수를 제공함

// 프로미스에서는 완료 및 오류처리를 하기 위해서 then(), catch() 함수를 제공하고 있음
// then(매개변수) : 비동기 함수 실행이 완료된 후 실행되는 함수
// catch(매개변수) : 비동기 함수 실행이 거부된 후 실행되는 함수

// 사용법
// 선언 :
// function 프로미스를 사용할 함수명 (함수 안에 promise실행)
//   return new Promise(function(resolve, reject){
//      비동기 통신 소스..
//      비동기 통신 결과에 따라 resolve(), reject();
//    });
//  }

// 실행 :
// 프로미스를 사용한 함수명()
// .then(function(매개변수)){
//    성공 시 실행할 내용
// }
// .catch(function(매개변수)){
//    실패 시 실행할 내용
// }

import React from "react";
import $ from "jquery";

// 프로미스 객체를 사용할 함수
function getData(){
    // 콜백 함수 선언 new Promise
    return new Promise(function(resolve,reject){
        const data = 100;

        resolve(data); //프로미스 사용 반환 값 : 100
        // reject(data); //프로미스 사용 오류 시 출력 : 100
    });
}
// resolve 하면 then 실행됨
// reject 하면 catch 실행됨
// 프로미스 사용 후 결과를 출력 // 함수 실행
getData()
    .then(function (data){
        console.log(`프로미스 사용 반환 값 : ${data}`);
    })
    .catch(function (err){
        console.log(`프로미스 사용 오류 시 출력 : ${err}`);
    });

const getData1 = function () {
    return new Promise(function (resolve, reject){
    //    import $ from "jquery"; 이거 있어야합!!

        $.ajax({
            url: 'http://localhost:8080/async/data1',
            type : 'post',
            success: function (data){
                console.log('통신성공');
                resolve(data);
            },
            error : function (){
                reject('오류발생!!');
            }
        });
    });
};

getData1()
    .then(function (data) {
    console.log(data);
})
    .catch(function(err) {
        console.log(err);
    });

export {getData,getData1};



























