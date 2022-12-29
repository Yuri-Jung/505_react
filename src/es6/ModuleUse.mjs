// ModuleUse.mjs

import {name, job, gender, getInfo} from "./MyMod1.mjs";
import {num1, num2, sum} from "./MyMod2.mjs";
// 중괄호 없이 바로 import
import sub from "./MyMod2.mjs";

// node.js가 ES6 버전이 나오기 이전부터 모듈화 시스템을 사용하고 있었음
// node.js가 기본적으로 사용하던 방식이 CommonJS 방식의 모듈 시스템을 사용하고 있었음
// ES6가 발표되면서 import/export를 지원하게 됨
// 기본 방식은 CommonJS으로 사용되고 ES6방식을 사용하려면 확장자가 .mjs를 사용하던지,
// package.json 파일에 type:module를 추가하여 설정을 해야 함. 우리는 전체 파일이 따로 움직이기 때문에 파일명을 바꾸는 걸 추천

// html 문서 내에서 import를 사용하고자 하는 경우 <script type = "module">을 사용하여 해당 파일이 모듈을 사용한다는 것을
// 알려줘야 함
// <script type="module" src="파일경로"></script>


console.log(name); // 아이유
console.log(job); // 가수
console.log(gender); //여성
console.log(getInfo()); //이름 : 아이유, 직업 : 가수, 성별 : 여성

console.log(`첫 번째 숫자 : ${num1} + 두 번째 숫자 : ${num2}의 값 : ${sum()}`);
// 첫 번째 숫자 : 10 + 두 번째 숫자 : 20의 값 : 30
console.log(`sub() 실행 : ${sub()}`); //sub() 실행 : -10


