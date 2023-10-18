"use strict";

function tableQuantity(event) {
  event.preventDefault();
  const table = event.target.tableName.value;
  const dish = event.target.dishName.value;
  const price = event.target.Price.value;
 // let quantity = event.target.Quantity.value;
  let obj = {};
    obj.tableName=table;
    obj.dishName=dish;
    obj.Price=price;
   
 // showUserOnScreen(obj);

   axios
     .post(
       "https://crudcrud.com/api/3b90a58a4f7549d1904bef4dcb7f732b/orders" ,obj)
     .then((response) => {
     showUserOnScreen(response.data);
     })
   .catch((err) =>{ console.log(err);
   })
   //showUserOnScreen(obj);
 }
 window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/3b90a58a4f7549d1904bef4dcb7f732b/orders")
    .then((response) => {
     for (var i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
     });
 });

function showUserOnScreen(obj) {
  const parentEl = document.getElementById("formId");
  const childEl = document.createElement("li");
  childEl.textContent = `${obj.tableName} - ${obj.dishName} - ${obj.Price}`;
   const button = document.createElement("input");
   button.type = "button";
   button.value = "Delete";


  // Button Click
  button.onclick = () => {
  //  console.log(obj.table);
    axios
      .delete(
        `https://crudcrud.com/api/3b90a58a4f7549d1904bef4dcb7f732b/orders/${obj._id}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      parentEl.removeChild(childEl);
    };
      const EditButton=document.createElement("input");
      EditButton.type="Button";
      EditButton.value="Edit";
      EditButton.onclick=()=>{
        localStorage.removeItem(obj.Price);
        axios
      .delete(
        `https://crudcrud.com/api/3b90a58a4f7549d1904bef4dcb7f732b/orders/${obj._id}`
      )
      .then((response) => {
      console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    parentEl.removeChild(childEl);
    document.getElementById("tableName").value=obj.tableName;
    document.getElementById("dishName").value=obj.dishName;
    document.getElementById("Price").value=obj.Price;
    };
    childEl.appendChild(button);
    childEl.appendChild(EditButton);
    parentEl.appendChild(childEl);
}

                                                                                                                         