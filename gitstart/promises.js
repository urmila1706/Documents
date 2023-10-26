"use strict";
let userActive = [];
let user = {
  userName: "abc",
  lastActivetime: 0,
};
function updateLasteUseractivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivetime = new Date().getTime();
      resolve(user.lastActivetime);
    }, 1000);
  });
}
function creatpost(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.userName = value;
      resolve(user.userName);
    });
  });
}
function deletePost() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      userActive.pop();
      res();
    }, 1000);
  });
}
Promise.all([updateLasteUseractivityTime(), creatpost("urmila")]).then(
  (userName) => {
    // printDetails();
    userActive.push(user);
    console.log(userName);
  }
);

Promise.all([updateLasteUseractivityTime(), creatpost("alaka")]).then(
  (userName) => {
    // printDetails();
    userActive.push(user);

    console.log(userName);
  }
);
// deletePost().then((post) => {
//   console.log(post);
// });
console.log(userActive);
console.log(user.userName);
console.log(userActive);