"use strict";
console.log("Person 1: show Ticket");
console.log("Person 2: show Ticket");
const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((res, rej) => {
    setTimeout(() => {
      res("ticket");
    }, 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));
  const getCandy = new Promise((resolve, reject) => resolve("Candy"));
  const getcoke = new Promise((resolve, reject) => resolve("ColDrink"));

  let ticket = await promiseWifeBringingTickets;
  let [popCorn, candy, drink] = await Promise.all([
    getPopcorn,
    getCandy,
    getcoke,
  ]);
  console.log(`${popCorn},${candy}, ${drink}`);

  return ticket;
};
preMovie().then((m) => console.log(`Person 3 : show ${m}`));
console.log("Person 4: show Ticket");
console.log("Person 5: show Ticket");
