function sendEmail() {
    // Collect the form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Construct the email body
    var emailBody = "Name: " + name + "\n" + " ";
    emailBody += "Email: " + email + "\n" + " ";
    emailBody += "Subject: " + subject + "\n" + " ";
    emailBody += "Message:\n" + message;

    // Use the 'mailto' link to open the user's email client
    var mailtoLink = "mailto:harshbais87@gmail.com?subject=" + subject + "&body=" + emailBody;

    // Trigger the email
    window.location.href = mailtoLink;
  }


  var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });