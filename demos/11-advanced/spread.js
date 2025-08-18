const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];

console.log(combinedArr);

const userObj = {
  id: 1,
  name: "Usman",
};

const userProfileObj = {
  age: 14,
  occupation: "Student",
};

const userCompleteObj = { ...userObj, ...userProfileObj };
console.log(userCompleteObj);

const productObj = {
  id: 1001,
  title: "logitech wireless mouse",
  category: "mice",
  price: 900,
};

const updatedProductObj = {
  ...productObj,
  price: 1000,
};

console.log(updatedProductObj);
