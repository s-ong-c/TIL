# Daily Code #10

## Question

[programers link](https://programmers.co.kr/learn/courses/30/lessons/42841)

### 숫자 야구

숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다.

각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다. 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.

```
A : 123
B : 1스트라이크 1볼.
A : 356
B : 1스트라이크 0볼.
A : 327
B : 2스트라이크 0볼.
A : 489
B : 0스트라이크 1볼.
```

제한 조건

- 질문의 수는 1 이상 100 이하의 자연수입니다.
- baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.

| baseball                                           | return |
| -------------------------------------------------- | -----: |
| [[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1 |      2 |

## Solution

### MY Solution

```js
function solution(baseball) {
  var answer = 0;

  let numbers = Array(1000).fill(false);

  function isNotOk(number) {
    let res = false;
    let check = {};

    const numberStrings = String(number).split("");

    for (const element of numberStrings) {
      if (element === "0") {
        res = true;
        break;
      }

      if (!check[element]) {
        check[element] = true;
      } else {
        res = true;
        break;
      }
    }

    return res;
  }

  for (let possibleNumber = 123; possibleNumber < 1000; possibleNumber++) {
    if (isNotOk(possibleNumber)) {
      continue;
    }
    let count = 0;
    // 배열 쪼개기
    for (const question of baseball) {
      let currentStrike = 0;
      let currentBall = 0;
      const number = question[0];
      const strike = question[1];
      const ball = question[2];
      const numberStrings = String(possibleNumber).split("");
      const currentStrings = String(number).split("");

      for (let i = 0; i < currentStrings.length; i++) {
        for (let j = 0; j < numberStrings.length; j++) {
          if (currentStrings[i] === numberStrings[j] && i === j) {
            currentStrike += 1;
          }

          if (currentStrings[i] === numberStrings[j] && i !== j) {
            currentBall += 1;
          }
        }
      }
      if (currentStrike === strike && currentBall === ball) {
        count++;
      }

      if (count === baseball.length) {
        numbers[possibleNumber] = true;
      } else {
        numbers[possibleNumber] = false;
      }
    }
  }
  for (let possibleNumber = 123; possibleNumber < 1000; possibleNumber++) {
    if (numbers[possibleNumber]) {
      // console.log(possibleNumber);
      answer += 1;
    }
  }

  return answer;
}
console.log(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]));
```

### Other Solution

```js
function solution(baseball) {
  var answer = 0;

  // 서로 다른 3개의 수 조합.
  for (let i = 123; i <= 987; i++) {
    let [x, y, z] = (i + "").split("");

    // 각 수의 범위는 1~9
    if (x === "0" || y === "0" || z === "0") continue;
    if (x === y || x === z || y === z) continue;

    for (let j = 0; j < baseball.length; j++) {
      let strike = 0;
      let ball = 0;

      const [query, query_s, query_b] = baseball[j];
      const [query_x, query_y, query_z] = (query + "").split("");
      if (query_x === "0" || query_y === "0" || query_z === "0") break;
      if (query_x === query_y || query_x === query_y || query_y === query_z)
        break;

      if (x === query_x) strike++;
      if (y === query_y) strike++;
      if (z === query_z) strike++;
      if (query_s != strike) break;

      if (x === query_y || x === query_z) ball++;
      if (y === query_x || y === query_z) ball++;
      if (z === query_x || z === query_y) ball++;
      if (query_b != ball) break;

      if (j === baseball.length - 1) answer++;
    }
  }

  return answer;
}
```
