"use strict";
function tableQuantity(event) {
  event.preventDefault();
  const table = event.target.tableName.value;
  const dish = event.target.dishName.value;
  const price = event.target.Price.value;
 // let quantity = event.target.Quantity.value;
  let obj = {
    table,
    dish,
    price,
   // quantity,
  };
  showUserOnScreen(obj);

   axios
     .post(
       "https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders" ,obj)
     .then((res) => console.log(res))
   .catch((err) => console.log(err));
 }
 window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders")
    .then((res) => {
     for (let i = 0; i < res.data.length; i++) {
        showUserOnScreen(res.data[i]);
      }
    })
    .catch((err) => {
      showUserOnScreen(err);
     });
 });

function showUserOnScreen(obj) {
  const parentEl = document.querySelector("#formElements");
  const childEl = document.createElement("li");
  childEl.textContent = `${obj.table} - ${obj.dish} - ${obj.price}`;
   childEl.classList = "table-Details";
  parentEl.appendChild(childEl);
   const btn1 = document.createElement("input");
   btn1.type = "button";
   btn1.value = "table1";
   btn1.classList = "btn btn-dark"
  childEl.appendChild(btn1);
   const btn2 = document.createElement("input");
 btn2.type = "button"; 
  btn2.value = "table2";
 btn2.classList = "btn btn-dark";
  childEl.appendChild(btn2);
  const btn3 = document.createElement("input");
   btn3.type = "button";
   btn3.value = "table3";
  btn3.classList = "btn btn-dark";
 childEl.appendChild(btn3);
  
  // Button Click
  btn1.onclick = () => {
    console.log(obj.table);
    axios
      .delete(
        `https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders/${obj._id}`
      )
      .then(() => {
        parentEl.removeChild(childEl);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders",
        {
          candy: `${obj.table}`,
          dish: `${obj.dish}`,
          price: `${obj.price}`,
          
        }
      )
      .then((res) => {
        showUserOnScreen(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  btn2.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders/${obj._id}`
      )
      .then((res) => {
        parentEl.removeChild(childEl);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders",
        {
          table: `${obj.table}`,
          dish: `${obj.dish}`,
          price: `${obj.price}`,
          
        }
      )
      .then((res) => {
        showUserOnScreen(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  btn3.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders/${obj._id}`
      )
      .then((res) => {
        parentEl.removeChild(childEl);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "https://crudcrud.com/api/888be381e049442e911bc40c67671c59/orders",
        {
          candy: `${obj.table}`,
          dish: `${obj.dish}`,
          price: `${obj.price}`,
          
        }
      )
      .then((res) => {
        showUserOnScreen(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
                                                                                                                         