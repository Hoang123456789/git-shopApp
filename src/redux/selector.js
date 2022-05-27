//import { createSelector } from "@reduxjs/toolkit";


//import { useEffect } from "react";
// export const registrantionSelector = (state) => {
//   //console.log(state.registrantion);

//   return state.registrantion;
// };

// export const registrantionSelectorEmail = (state) => {
//   //console.log(state.registrantion.Email);
//   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   //  console.log(regex.test(state.registrantion.Email));
//   regex.test(state.registrantion.Email);
//   return regex.test(state.registrantion.Email);
// };

// export const HanleRegistrationTextSelector = createSelector(
//   registrantionSelector,
//   registrantionSelectorEmail,
//   (registrantion, Email) => {
//     //console.log( registrantion.Password);
//     let Success = false;
//     if (
//       registrantion.UserName !== "" &&
//       Email &&
//       registrantion.Password.length > 1 &&
//       registrantion.Password === registrantion.Passwords
//     ) {
//       Success = true;
//       Start({
//         UserName: registrantion.UserName,
//         Email: Email,
//         PassWord: registrantion.Password,
//         passWords: registrantion.PassWords,
//       });
//       // console.log(Success);
//     }
//     return Success;
//   }
// );

// function Start(data) {
//   fetch("https://626f4d8564bae572bb55a59f.mockapi.io/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       // console.log(res);
//       return res;
//     });
// }


 export const product$=(state)=>{
    console.log(state.products);
   return state.products.id
 }



 export const productFilter$=(state)=>{
  //console.log(state.FilterProduct.data);
   return state.FilterProduct.data

 }