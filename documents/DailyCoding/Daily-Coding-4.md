# Daily Code #4

## Question

[programers link](https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript)

### 모의고사

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

| answers     | return  |
| ----------- | :-----: |
| [1,2,3,4,5] |   [1]   |
| [1,2,3,4,5] | [1,2,3] |

> 가장 잘찍은 순서대로 Return

## Solution

### My Solution

```js
function solution(answers) {
  const aa = [1, 2, 3, 4, 5];
  const bb = [2, 1, 2, 3, 2, 4, 2, 5];
  const cc = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  function max(a, b) {
    if (a > b) return a;
    else return b;
  }
  var answer = [];

  let count = [0, 0, 0];
  answers.map((i, j) => {
    if (aa[j % 5] === i) count[0]++;
    if (bb[j % 8] === i) count[1]++;
    if (cc[j % 10] === i) count[2]++;
  });

  let value = 0;
  let idx = 0;
  value = max(max(count[0], count[1]), count[2]);
  count.forEach((number, index) => {
    if (value === number) {
      answer[idx] = index + 1;
      idx += 1;
    }
  });

  return answer;
}
```

### another Solution

```js
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
```

> 문제에는 패턴이 있으며, 패턴을 잘 보고 % 로 나머지로 처리
