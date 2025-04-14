document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => {
      const match = key.match(/^data\\[(.*)\\]$/);
      if (match) object[match[1]] = value;
    });
  
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: object })
    })
    .then(response => response.json())
    .then(() => {
      document.getElementById('response-message').textContent = "Form submitted successfully!";
      form.reset();
    })
    .catch(error => {
      document.getElementById('response-message').textContent = "An error occurred.";
      console.error('Error:', error);
    });
  });
  