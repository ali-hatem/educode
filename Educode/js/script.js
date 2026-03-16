


// //=========================================
// // image shower
// // debugger
// window.addEventListener("DOMContentLoaded", function() {
// console.log("welcome");


// let img = localStorage.getItem("selectedAvatar");

// document.getElementById("avatar").src = img;
// });

function saveAvatar() {

  let avatar = document.querySelector('input[name="avatar"]:checked').value;

  localStorage.setItem("userAvatar", avatar);

  window.location.href = "../quiz/quiz.html";
}

