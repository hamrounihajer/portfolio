document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      // You can add code here to handle form submission, like sending data to a server
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      alert('Message sent!');
      document.getElementById('contact-form').reset();
    });
  });
  