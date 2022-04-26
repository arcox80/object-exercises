/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  const returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const employeeObj = {};
    for (let j = 0; j < array[i].length; j += 1) {
      const keyValueArr = array[i][j];
      employeeObj[keyValueArr[0]] = keyValueArr[1];
    }
    returnArray.push(employeeObj);
  }
  return returnArray;
}
