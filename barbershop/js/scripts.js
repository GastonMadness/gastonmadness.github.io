  // Variables
   var enterUserForm = document.querySelector(".login");
   var popupUserForm = document.querySelector(".modal-content");
   var overlay = document.querySelector(".modal-overlay");
   var closeUserForm = popupUserForm.querySelector(".modal-content-close");
   var loginField = popupUserForm.querySelector("[name=login]");
   var passwordField = popupUserForm.querySelector("[name=password]");
   var UserForm = popupUserForm.querySelector("form");
   var storage = localStorage.getItem("login");
   var mapOpen = document.querySelector(".js-open-map");
   var mapPopup = document.querySelector(".modal-content-map");
   var mapClose = mapPopup.querySelector(".modal-content-close");
  //  Open popup and overlay
   enterUserForm.addEventListener("click", function(event){
     event.preventDefault();
     popupUserForm.classList.add("modal-content-show");
     overlay.classList.add("modal-overlay-show");

     if (storage) {
       loginField.value = storage;
       passwordField.focus();
     } else {
       loginField.focus();
     }
   });
 // Open map popup and overlay
  mapOpen.addEventListener("click",function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
  });

 //  Close popup and overlay throuth button
   closeUserForm.addEventListener("click", function(event){
     event.preventDefault();
     if (popupUserForm.classList.contains("modal-content-show")) {
       popupUserForm.classList.remove("modal-content-show");
     }
     if (overlay.classList.contains("modal-overlay-show")) {
       overlay.classList.remove("modal-overlay-show");
     }
     if (popupUserForm.classList.contains("modal-error")) {
       popupUserForm.classList.remove("modal-error");
     }
   });

   mapClose.addEventListener("click", function(event) {
     event.preventDefault();
     if (mapPopup.classList.contains("modal-content-map-show")) {
       mapPopup.classList.remove("modal-content-map-show");
     }
     if (overlay.classList.contains("modal-overlay-show")) {
       overlay.classList.remove("modal-overlay-show");
     }
   });

 // Close popup, map and overlay throuth click on overlay
   overlay.addEventListener("click", function(event) {
     if (popupUserForm.classList.contains("modal-content-show")) {
       popupUserForm.classList.remove("modal-content-show");
     }
     if (overlay.classList.contains("modal-overlay-show")) {
       overlay.classList.remove("modal-overlay-show");
     }
     if (popupUserForm.classList.contains("modal-error")) {
       popupUserForm.classList.remove("modal-error");
     }
     if (mapPopup.classList.contains("modal-content-map-show")) {
       mapPopup.classList.remove("modal-content-map-show");
     }
   });
 // Close popup,map nad overlay throuth ESC
   window.addEventListener("keydown", function(event){
     if (event.keyCode === 27) {
       if (popupUserForm.classList.contains("modal-content-show")) {
         popupUserForm.classList.remove("modal-content-show");
       }
       if (overlay.classList.contains("modal-overlay-show")) {
         overlay.classList.remove("modal-overlay-show");
       }
       if (popupUserForm.classList.contains("modal-error")) {
         popupUserForm.classList.remove("modal-error");
       }
       if (mapPopup.classList.contains("modal-content-map-show")) {
         mapPopup.classList.remove("modal-content-map-show");
       }
     }
   });
 // Test form for submit
   UserForm.addEventListener("submit", function(event) {
     if (!loginField.value || !passwordField.value) {
       event.preventDefault();
       popupUserForm.classList.add("modal-error");
     } else {
       localStorage.setItem("login", loginField.value);
     }
   });
