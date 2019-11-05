# Daily Code #3

## Question

[programers link](https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript)

### 체육복

점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요..

제한 조건
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

| n   | lost  | reverse | return |
| --- | :---: | ------: | -----: |
| 5   | [2,4] | [1,3,5] |      5 |
| 5   | [2,4] |     [3] |      4 |
| 5   |  [3]  |     [1] |      2 |

> 체육 수업을 들을 수 있는 학생의 최댓값 리턴

## Solution

### My Solution

```js
function solution(n, lost, reserve) {
  var answer = n;
  let r = reserve.filter(x => lost.indexOf(x) == -1);
  let l = lost.filter(x => reserve.indexOf(x) == -1);

  const student = Array(n).fill(1);
  console.log(student);
  for (let i = 0; i < lost.length; i++) {
    const index = lost[i] - 1;
    student[index] -= 1;
  }
  console.log(student);

  for (let i = 0; i < reserve.length; i++) {
    const index = reserve[i] - 1;
    student[index] += 1;
  }
  console.log(student);

  for (let i = 0; i < student.length; i++) {
    if (i !== 0 && student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i - 1]--;
        student[i]++;

        continue;
      }
    }
    if (i !== student.length - 1 && student[i] === 0) {
      if (student[i + 1] === 2) {
        student[i + 1]--;
        student[i]++;
      }
    }
  }

  return student.filter(i => i >= 1).length;
}
console.log(solution(5, [4, 2], [3]));
```

### another Solution

```js
function solution(n, lost, reserve) {
  return (
    n -
    lost.filter(a => {
      const b = reserve.find(r => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter(r => r !== b);
    }).length
  );
}
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
```

> 모두가 처음부터 체육복이 있다고 가정하자
