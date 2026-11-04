/* The public contact address. Change this line and every page picks it up. */
window.SANSAR_CONTACT_EMAIL = "hello@sansarbay.com";

document.querySelectorAll("[data-contact-email]").forEach(function (el) {
  var email = window.SANSAR_CONTACT_EMAIL;
  el.textContent = email;
  if (el.tagName === "A") {
    var subject = el.getAttribute("data-mailto-subject");
    var href = "mailto:" + email;
    if (subject) href += "?subject=" + encodeURIComponent(subject);
    el.setAttribute("href", href);
  }
});
