
# Arrow-Function(화살표 함수)?


자바스크립트의 람다식? <br>
(한번에 여러 작업을 처리)작업을 할 때 <br>
필요한 Runnable 객체(실행코드)를 편리하게 사용 <br>
-> JS에서는 `익명함수를 편리하게 사용하기 위해서`

`arrow function expression`
<style>
blockquote:before {
  content: "\201C";
  font-size: 3em;
  font-family: Georgia;
  color: grey;
  float: left;
  margin: -10px 10px 0px -10px;

}
</style>
<blockquote>
<p>Always apply to ‘Anonymous function’  </p>
</blockquote>

<br>



## Arrow function Rule

```javascript
// Arrow 함수
//Parameter가 없으면 소괄호(( ))만 작성한다
// 파라미터를 선언하지 않는 경우
   var f1 =()=> {
	    	console.log("헬로");
	    };
	    f1();

////////////////////////
// 파라미터가 한개인 경우
   var f2 =(a)=> {
            console.log(a);
        };
   f2(100);
/////////////////////////////////////////
//Parameter가 하나일 때는 괄호를 생략할 수 있다.
// 파라미터가 한개인 경우, 괄호 생략가능
    var f3 =a=> {
            console.log(a);
        };
    f3(200);

/////////////////////////////////////////
// 파라미터가여러개인경우 (생략불가)
     var f4 =(a,b,c)=> {
            console.log(a,b,c);
        };
        f4(100,200,300);

////////////////////////////////////////
// return keyword 를 사용하요 값을 리턴한다.
	    var f1 =(a,b)=> {
	    	return a+b;
	    }
	    console.log("합계",f1(100,200));

// 함수안에 결과를 리턴하는 한문장만 있다면
// return keyword를 생략해도된다.
//단 중괄호를 생략해야한다.

// 중괄호를 묶는다면 원래대로 표현해야한다!!!!!!!!!
        var f2 =(a,b)=> a+b;

        console.log("합계",f2(100,200));
```





## 주의점

자바스크립트에서 생성자 함수를 통해 객체를 생성하면 변수 `scope`가 변경된다.<br>
 생성자 함수 내부에서의 `this`는 자신을 호출한 대상이 아닌 생성자 함수를 가리키게 된다.





## `this`, `arguments`의 바인딩이 다르다.

`Arrow Function`은 `this` 바인딩을 갖지 않습니다. <br>
기존의 `function`에서 `this`의 탐색 범위가 함수의 `{}` 안에서 찾은 반면 `Arrow Function`에서 `this`는 일반적인 인자/변수와 동일하게 취급됩니다.

```javascript
// function(){}방식으로 호출할 때
// ES5
function objFunction() {
  console.log('Inside `objFunction`:', this.foo);
  return {
    foo: 25,
    bar: function() {
      console.log('Inside `bar`:', this.foo);
    },
  };
}

objFunction.call({foo: 13}).bar(); // objFunction의 `this`를 오버라이딩합니다.
```
<hr>

`결과는 값 `

```js
Inside `objFunction`: 13 // 처음에 인자로 전달한 값을 받음
Inside `bar`: 25 // 자신이 가지고 있는 Object를 this로 인지해서 25를 반환
```





<br>

>Arrow function 을 사용하여 변수 스코프를 유지
Arrow function를 통해서 함수를 정의하게 되면,
변수들이 사용되는 위치와는 상관없이 변수들이 정의되어 있는 값으로 `scope`가 `binding` 된다.
한 가지 특징을 덧붙이자면, arrow function을 사용하게 되면
`arguments` 객체가 생성되지 않는다.




## ES6 문법을 사용하는 이상, `arguments`는 필요하지 않다!



```js
//ES6
// Arrow Function방식으로 호출할 때
function objFunction() {
  console.log('Inside `objFunction`:', this.foo);
  return {
    foo: 25,
    bar: () => console.log('Inside `bar`:', this.foo),
  };
}

objFunction.call({foo: 13}).bar(); // window 객체의 `this`

```


<hr>

`결과는 값 `

```js
Inside `objFunction`: 13 // 처음에 인자로 전달한 값을 받음
Inside `bar`: 13 // Arrow Function에서 this는 일반 인자로 전달되었기 때문에 이미 값이 13로 지정됩니다.
```



#### `ArrowFunction은 `this의 `Scope`를 바꾸고 싶지 않을 때 사용한다!!!!!

<br>
<br>


## this의 정체<br>

ES5에서 `this` 결정하는 요인!!!<br>

1.  -->  생성자 내에서
      생성자 함수를 `new`라는 키워드를 통해 호출하면 <br>
      내부에서 `this`는 인스턴스 그 자체를 가리킨다. <br>
      생성자 함수 내부에서 `return this;`가 생략되어 있기 때문이다.<br>

2.  -->   함수 내에서`this`는 생략된 매개 변수이다.<br>
       무엇이 함수를 호출했는가가 `this`를 결정한다.<br>

3.  -->  `bind`, `apply`, `call` method or `proxy` method of jQuery<br>
       `this`는 메소드로 바꿔준 대상을 가리키게 된다.<br>

> 그렇다면 arrow function  --> `this`는 무엇???



해당 function을 정의한 영역의 `this`를 가져온다. 한 단계 더 위의 `element`를 가리키는 것이다. 그렇기 때문에 `prototype`에 함수를 정의할 때 arrow function을 사용할 때 내부적으로 `this`를 사용하게 되면 객체를 가리키지 않고 `window` 객체를 가리키게 된다. 그래서  arrow function은 명식적으로 `bind`, `call`로 `this`를 넣어줘도 의미 없다.

>`기존의 방식대로 function`을 작성해야만 작동하는 function이 존재할 수도있다.
`때로는`  `arrow function`으로 기존의 function을 작성하던 방식보다 효율적이고 간편하게 작성가능하다 따라서 . `새로운 문법`과 `기존의 문법`을 때에 따라서 사용하는 것이 중요하다!!!!