// You can add JavaScript here to handle hover effects, animations, or other interactive elements.
// For example, you could use JavaScript to add a hover effect to the project items:

const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
  });

  item.addEventListener('mouseout', () => {
    item.style.boxShadow = 'none';
  });
});

$("#contact_form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the name input value
        var name = $('#contact_form').find('input[name="name"]').val().trim();

        // Simple validation
        if (name === "") {
            alert("Please enter your name.");
            return; // Exit if the name is empty
        }

        // Add classes for animations
        $("#contact_form").addClass("shrink");
        $(".container").addClass("bgchange");
        $(".thanks").addClass("reveal");
        $("body").addClass("invert");

        // Add user name to the thank you message
        $(".thanks").find("span").text(name); // Set the name using text()

        // Optionally clear the form fields
        $('#contact_form')[0].reset(); // Clear the form inputs
    });

const textElement = document.querySelector('.text');
const words = ['CSS', 'JavaScript', 'HTML'];
let wordIndex = 0;
let charIndex = 0;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord[charIndex];

  textElement.textContent += currentChar;

  charIndex++;
  if (charIndex > currentWord.length) {
    charIndex = 0;
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    textElement.textContent = '';
  }

  setTimeout(type, 100);
}

type();


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite> .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};