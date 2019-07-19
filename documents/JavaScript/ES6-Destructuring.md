# 구조 분해 문법(Destructuring)

## what?
>(Destructuring)은 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것이다. 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용!!!.


### 기존 ES5

```js
var arr = [1, 2, 3, 4];
var obj = {
  a: 10,
  b: 20,
  c: 30
};

```

`'구조 분해'란 -> 바로 이러한 변수 선언 형식이 아래와 같이 자유로워지는 것`
### ES6

```js
var { a, b, c } = obj;
//기존 자바스크립트라면 오류인데
//아래와 같이 제대로 동작!!!

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```
## 특정 객체의 값을 꺼내오는 방법
<br>

### 기존문법!!!
>객체의 특정 속성 값을 꺼내올 때마다 일일이 변수를 하나 생성하고 담아줘야 한다

```js
var josh = {
  language: 'javascript',
  position: 'front-end',
  area: 'pangyo',
  hobby: 'singing',
  age: '102'
};

var language = josh.language;
var position = josh.position;
var area = josh.area;
var hobby = josh.hobby;
var age = josh.age;
```

### 구조분해문법 적용시!!

```js
var josh = {
  language: 'javascript',
  position: 'front-end',
  area: 'pangyo',
  hobby: 'singing',
  age: '102'
};

var { language, position, area, hobby, age } = josh;
console.log(language); // javascript
console.log(position); // front-end
console.log(area); // pangyo
console.log(hobby); // singing
console.log(age); // 102
```

## Destructuring Assignment
>오른쪽의 배열을 분할하여 왼쪽 변수에 값을 할당한다. 인덱스 번째의 엘리먼트 값을 인덱스 번째의 변수에 할당하는 것이다. 엘리먼트가 아직 남았는데 할당할 변수가 없다면 그대로 할당되지 않고, 엘리먼트가 남지 않았는데 할당한 변수가 있다면 그 변수는 undefined로 할당된다.

```js
let one, two, three, four;
//1번
[one, two] = [1, 2];
console.log(one); //1
console.log(two); //2
//2번
[one, two, three] = [1, 2];
console.log(one); //1
console.log(two); //2
console.log(three);//undefined
//3번
[one, two] = [1, 2, 3];
console.log(one); two//1
console.log(two); //2
```
### Spread 연산자를 사용

```js
[one, ...other] = [1, 22, 24, 25];
console.log(one); //1
console.log(other); //[22, 24, 25]
[one, , , four] = [1, 2, 3, 4];
console.log(one); //1
console.log(four); //4
```


### Default Parameter

>parameter에 값이 넘어가지 않아도,<br>
`default value`로 설정된 값이 해당 파라미터 대신 값이 할당된다.<br>  `parameter`에서도 마찬가지로 기존의<br>` default value`는 undefined 값이었지만,<br> 그 값을 코드 상에서 설정할 수 있게 된 것이다.

```js

let dFunction = (prev, post = 20) => prev + post;
console.log(dFunction(1)); //21 by default parameter
console.log(dFunction(1, 2)); //3
console.log(dFunction(1, undefined)); //21 by default parameter
console.log(dFunction(1, null)); //1
```

>함수에도 `length`라는` property`가 따로 존재. 하지만  이 때,`default parameter`는 length에서 무시된다.