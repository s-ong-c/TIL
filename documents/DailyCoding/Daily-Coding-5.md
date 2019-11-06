# Daily Code #5

## Question

[programers link](https://leetcode.com/problems/two-sum/)

### Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

제한 조건

```js
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

> 배열 안에는 정답이 하나(두 개의 숫자)만 있도록 구성되어 있다고 가정하며, 같은 숫자를 두 번 사용할 수 없다.

## Solution

### My Solution

```js
const nums = [2, 7, 11, 15];
const target = 9;
const twoSum = function(nums, target) {
  // [1,2,3,4]
  // target 5
  //nums[0] + nums[1]
  //nums[1] + nums[2]
  //nums[2] + nums[3]
  //nums[3] + nums[1]
  //nums[3] + nums[0]
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(target - nums[i] in obj);
    if (target - nums[i] in obj) {
      console.log(obj[target - nums[i]], i);
      return obj[target - nums[i]], i;
    } else {
      obj[nums[i]] = i;
    }
  }
};
twoSum(nums, target);
```

### another Solution

```js
var twoSum = function(nums, target) {
  var ret = [];
  var exist = {};
  for (var i = 0; i < nums.length; i++) {
    if (typeof exist[target - nums[i]] !== "undefined") {
      ret.push(exist[target - nums[i]]);
      ret.push(i + 1);
    }

    exist[nums[i]] = i + 1;
  }

  return ret;
};
```
