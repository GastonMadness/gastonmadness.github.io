var contactsPopup = document.querySelector(".modal-contacts");
var overlay = document.querySelector(".modal-overlay");
var contactsOpen = document.querySelector(".open-write-us");
var contactsClose = document.querySelector(".modal-contacts-close");


contactsOpen.addEventListener("click", function(event) {
   event.preventDefault();
   contactsPopup.classList.add("modal-contacts-showComand");
   overlay.classList.add("modal-overlay-show");
});

contactsClose.addEventListener("click", function(event) {
   event.preventDefault();
   if (contactsPopup.classList.contains("modal-contacts-showComand")) {
     contactsPopup.classList.remove("modal-contacts-showComand");
   }
   if (overlay.classList.contains("modal-overlay-show")) {
     overlay.classList.remove("modal-overlay-show");
   }
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  if (contactsPopup.classList.contains("modal-contacts-showComand")) {
    contactsPopup.classList.remove("modal-contacts-showComand");
  }
  if (overlay.classList.contains("modal-overlay-show")) {
    overlay.classList.remove("modal-overlay-show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-contacts-showComand")) {
      contactsPopup.classList.remove("modal-contacts-showComand");
    }
    if (overlay.classList.contains("modal-overlay-show")) {
      overlay.classList.remove("modal-overlay-show");
    }
  }
});
