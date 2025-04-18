document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enrollment-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.classList.add("hidden");

    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => object[key] = value);

    fetch("https://sheetdb.io/api/v1/fojmtigc5mq3s", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: object })
    })
      .then(response => response.json())
      .then(data => {
        form.reset();
        successMessage.classList.remove("hidden");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
      });
  });
});
