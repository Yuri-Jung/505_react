// MyMod1.mjs 출력할 모듈
// export로 설정 방법
// 외부로 출력하고자 하는 변수 및 함수, 클래스에 export를 접두사 붙임
// 2번 방법이 더 많이 사용되는 편이다

export const name = '아이유';
export const gender = '여성';
export const job = '가수';

export const getInfo = () => console.log(`이름 : ${name}, 직업 : ${job}, 성별 : ${gender}`);
