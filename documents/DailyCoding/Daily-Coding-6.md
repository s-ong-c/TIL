# Daily Code #6

## Question

[programers link](https://programmers.co.kr/learn/courses/30/lessons/42842/)

### 카펫

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 빨간색으로 칠해져 있고 모서리는 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 빨간색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 빨간색 격자의 수 red가 매개변수로 주어질 때
카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건

- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
- 빨간색 격자의 수 red는 1 이상 2,000,000 이하인 자연수입니다.
- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

| brown | red | return |
| ----- | :-: | -----: |
| 10    |  2  |  [4,3] |
| 8     |  1  |  [3,3] |
| 12    | 12  |  [8,6] |

> 가로, 세로 크기를 순서대로 배열에 담아 return

## Solution

### first MySolution think

```js
function solution(brown, red) {
  const total = brown + red;
  var answer = [];

  //약수 구하기
  function divisors(integer) {
    const number = [];
    for (var i = 1; i < integer; i++) {
      if (integer % i == 0) {
        number.push(i);
      }
    }
    return number;
  }
  const numbering1 = divisors(total);
  if (numbering1.length == 1) {
    answer.push(total, 1);
  } else {
    for (let i = 0; i < numbering1.length; i++) {
      for (j = 0; j < numbering1.length; j++) {
        if (numbering1[i] * numbering1[j] === total) {
          if (numbering1[i] >= numbering1[j])
            answer.push(numbering1[i], numbering1[j]);
        }
      }
    }
  }
  return answer.slice(0, 2);
}
```

### SecondMy Solution

```js
function solution(brown, red) {
  const total = brown + red;
  var answer = [];
  for (let y = 3; y <= red + 2; y++) {
    for (let x = y; x * 2 + (y - 2) * 2 <= brown; x++) {
      if ((x - 2) * (y - 2) == red) {
        answer.push(x, y);
      }
    }
  }
  return answer.slice(0, 2);
}
```

> 처음에 그냥 약수를 구해서 문제를 풀었는데
> 테스트 몇개가 오류났다 ....
> ...빨간색 타월 갯수로 문제르 풀어야 한다는 걸 너무 늦게 꺠달았다
