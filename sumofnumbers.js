/**
 * Created by owner on 2/5/2017.
 * Author: Elena Barbour
 * Summing from list
 */


sumFor(data)
{
  let sum = 0;
  for(let i =0; i<data.length; i++)
  {
    sum += data.pop();
  }
  return sum;
}

sumWhile(data)
{
  let sum = 0;
  let i = 0;
  while(i<data.length)
  {
    sum+=data.pop();
    i++;
  }
  return sum;
}

sumRecursion(data)
{
  let sum = 0;
  if(data.length == 0)
  {
    return sum;
  }
  else
  {
    sum += data.pop();
    return sum+=sumRecursion(data);

  }

}

sumTheSimpleWay(data)
{
  return _.reduce(data, function(memo, data){return data + memo;},0);
}