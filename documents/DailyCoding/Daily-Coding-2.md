# Daily Code #2

## Question
[programers link](https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript)

### 2016년

2016년 1월 1일은 금요일입니다. 
2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

| a       | b         | result |
| --- |:---:| ----:|
|5|24|TUE|

>두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수 작성

## Solution

### My Solution
```js
const day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
solution(1,1);
function solution(a,b){
    var answer = '';
    var days = 0;
    for (let i=0; i<a-1; i++) {
        days +=date[i];
    }
    return answer = day[(days -1+ b) % 7];
}
```

### another Solution
```js
function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

console.log(getDayName(5,24));
```

> 처음에 요일은 일요일 또는 월요일으로 시작하니깐 꼬인다.<br>
> 왜 Date 를 안쓰고 했을까 .....<br>
> Format을 잘 정해야 하나보다!!