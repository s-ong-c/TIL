# Daily Code #8

## Question

[programers link](https://programmers.co.kr/learn/courses/30/lessons/60058/)

### 문자열 압축

데이터 처리 전문가가 되고 싶은 어피치는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 aabbaccc의 경우 2a2ba3c(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, abcabcdede와 같은 문자열은 전혀 압축되지 않습니다. 어피치는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, ababcdcdababcdcd의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 2ab2cd2ab2cd로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 2ababcdcd로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, abcabcdede와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 abcabc2de가 되지만, 3개 단위로 자른다면 2abcdede가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

s의 길이는 1 이상 1,000 이하입니다.
s는 알파벳 소문자로만 이루어져 있습니다..

| p                   | return |
| ------------------- | -----: |
| "aabbaccc"          |      7 |
| "ababcdcdababcdcd"  |      9 |
| "abcabcdede"        |      8 |
| "xababcdcdababcdcd" |     17 |

#### 입출력 예에 대한 설명

입출력 예 #1

문자열을 1개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #2

문자열을 8개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #3

문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #4

문자열을 2개 단위로 자르면 abcabcabcabc6de 가 됩니다.
문자열을 3개 단위로 자르면 4abcdededededede 가 됩니다.
문자열을 4개 단위로 자르면 abcabcabcabc3dede 가 됩니다.
문자열을 6개 단위로 자를 경우 2abcabc2dedede가 되며, 이때의 길이가 14로 가장 짧습니다.

입출력 예 #5

문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.

## Solution

### MY Solution

```js
function solution(s) {
  const array = [];
  const posible = parseInt(s.length / 2);
  const oneSplit = s.split("");
  let count = 1;

  const arr2 = [];
  for (let n = 1; n <= posible; n++) {
    const arr1 = [];
    for (let i = 0; i < s.length; i += n) {
      arr1.push(s.substr(i, n));
    }
    arr2.push(arr1);
  }
  const aa = [];
  for (let i = 1; i < arr2.length; i++) {
    const bb = [];
    arr2[i].filter((a, b, c) => {
      if (a === arr2[i][b + 1]) {
        count++;
      } else {
        if (count == 1) {
          bb.push(a);
        } else {
          bb.push(count, a);
        }
        count = 1;
      }
    });
    aa.push(bb.join("").length);
  }
  oneSplit.filter((a, b, c) => {
    if (a === oneSplit[b + 1]) {
      count++;
    } else {
      if (count == 1) {
        array.push(a);
      } else {
        array.push(count, a);
      }
      count = 1;
    }
  });
  if (aa.length == 0) {
    return array.length;
  } else {
    const min = aa.reduce((a, b) => {
      return a > b ? b : a;
    });
    if (min <= array.length) {
      return min;
    }
  }

  return array.length;
}
console.log(solution("a"));
console.log(solution("ababcdcdababcdcd"));
```

### Other Solution

```js
const solution = s => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map(i => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ""}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
      ["", "", 0]
    )
  );
};

const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
```
