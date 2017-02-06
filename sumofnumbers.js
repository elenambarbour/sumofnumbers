/**
 * Created by owner on 2/5/2017.
 * Author: Elena Barbour
 * Summing from list
 */

const testNums = [1, 2, 3, 4];
function sumFor(data) {
  let sum = 0;
  for ( let num of data) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(testNums));

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while(i<data.length) {
    sum+=data[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testNums));

function sumRecursion(data) {
  let sum = 0;
  if(data.length == 0) {
    return sum;
  }
  else {
    sum += data.pop();
    return sum+=sumRecursion(data);

  }

}
console.log(sumRecursion(testNums));

function sumTheSimpleWay(data)
{
  return _.reduce(data, function sumNum(memo, nums){ return memo + nums;},0);
}
console.log(sumTheSimpleWay(testNums));
