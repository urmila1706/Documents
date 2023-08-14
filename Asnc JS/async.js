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
  const getcoke = new Promise((resolve, reject) => resolve("Cool Drink"));

  let ticket = await promiseWifeBringingTickets;
  let [popCorn, candy, drink] = await Promise.all([
    getPopcorn,
    getCandy,
    getcoke,
  ]);
  console.log(`${popCorn},${candy} ${drink}`);
  //   const getPopCorn = new Promise((res, rej) => res(` PopCorn `));
  //   const getButter = new Promise((res, rej) => res(` Buttor`));
  //   const getColdDrinks = new Promise((res, rej) => res(`Cold Drinks`));
  //   console.log("Wife: I Got Tickets");
  //   console.log("Husband: We Should Go in");
  //   console.log("Wife: No i am hungry");
  //   let popcorn = await getPopCorn;
  //   console.log(`Husband: Here It is the ${popcorn}. We Should Go in`);
  //   console.log("Wife: I need Butter On my PopCorn");
  //   let butter = await getButter;
  //   console.log(`Husband: Here It is the ${butter}. We Should Go in`);
  //   console.log("Husband: So do you Need any thing Else ...!");
  //   let cold = await getColdDrinks;
  //   console.log("Wife: I need A Cold Drink");
  //   console.log(
  //     `Husband: Here Is the ${cold} .. Do you need Any thing Else....Bab🧡`
  //   );
  //   console.log(
  //     "Wife: Thats Enough ... Ohh We are getting Late For the  Movie. Lets Go"
  //   );

  // Handeling All Promises
  return ticket;
};
preMovie().then((m) => console.log(`Person 3 : show ${m}`));
console.log("Person 4: show Ticket");
console.log("Person 5: show Ticket");
// const promiseWifeBringingTickets = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("ticket");
//   }, 3000);
// });
// const getPopCorn = promiseWifeBringingTickets.then((t) => {
//   console.log("Wife: I Got Tickets");
//   console.log("Husband: We Should Go in");
//   console.log("Wife: No i am hungry");
//   return new Promise((res, rej) => res(`${t} PopCorn `));
// });
// const getButter = getPopCorn.then((t) => {
//   console.log("Husband: Here It is the PopCorn. We Should Go in");
//   console.log("Wife: I need Butter On my PopCorn");
//   console.log("Husband: So do you Need any thing Else ...!");
//   console.log("Wife: No ... Hurry we are Getting Late for the Movie");

//   return new Promise((res, rej) => res(`${t} Buttor`));
// });
// getButter.then((t) => {
//   console.log(t);
// });