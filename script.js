document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("orderNowBtn");

  if (orderBtn) {
    orderBtn.addEventListener("click", () => {
      const whatsappNumber = "03149976315";
      const message =
        "Hello, I want to place an order for Business Branding Graphs. I have sent payment to Easy Paisa (Account: 0332-1025547, Holder: Farjad Raza Khan).";

      const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }
});
