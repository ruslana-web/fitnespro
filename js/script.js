var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menu');
  var row2 = document.querySelector('.row__2');
  var li = document.querySelectorAll('li');
  var body = document.body;

  menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    row2.classList.toggle('active');
    for (var i = 0; i < li.length; i++) {
      li[i].classList.toggle('active');
    }
    body.classList.toggle('lock');
  });

  var row2Links = document.querySelectorAll('.row__2 a');
  for (var i = 0; i < row2Links.length; i++) {
    row2Links[i].addEventListener('click', function() {
      row2.classList.remove('active');
      menu.classList.remove('active');
      for (var i = 0; i < li.length; i++) {
        li[i].classList.remove('active');
      }
      body.classList.remove('lock');
    });
  }
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
var modal__call = document.getElementById("myModal__call");
var btn__call = document.getElementById("myBtn__call");
var btn2__call = document.getElementById("myBtn2__call");
var span__call = document.getElementsByClassName("close__call")[0];
btn__call.onclick = function() {
  modal__call.style.display = "block";
}
btn2__call.onclick = function() {
  modal__call.style.display = "block";
}
span__call.onclick = function() {
  modal__call.style.display = "none";
}
var modal__free = document.getElementById("myModal__free");
var btn__free = document.getElementById("myBtn__free");
var span__free = document.getElementsByClassName("close__free")[0];
btn__free.onclick = function() {
  modal__free.style.display = "block";
}
span__free.onclick = function() {
  modal__free.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal__call) {
    modal__call.style.display = "none";
  }
  else if(event.target == modal__free) {
    modal__free.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.image');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
      var img = this;
      var src = img.getAttribute('src');
      var popup = document.createElement('div');
      popup.className = 'popup';
      popup.innerHTML = "<div class='popup_bg'></div><img src='" + src + "' class='popup_img' />";
      document.body.appendChild(popup);
      var popupDiv = document.querySelector('.popup');
      popupDiv.style.display = 'block';
      var popupBg = document.querySelector('.popup_bg');
      popupBg.addEventListener('click', function() {
        popupDiv.style.display = 'none';
        setTimeout(function() {
          popupDiv.parentNode.removeChild(popupDiv);
        }, 200);
      });
    });
  }
});

const counters = document.querySelectorAll('.counter');
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.getAttribute('data-target');
      let count = 0;
      const startValue = +entry.target.innerText.replace(/\D/g,'');

      const animateValue = timestamp => {
        const progress = timestamp - startTime;
        const duration = target - startValue <= 10 ? 500 : 2000;
        const value = Math.floor(progress / duration * (target - startValue) + startValue);
        entry.target.innerHTML = value.toString();
        
        if (progress < duration) {
          requestAnimationFrame(animateValue);
        } else {
          entry.target.innerText = target.toLocaleString('en-US');
        }
      };
      
      const startTime = performance.now();
      requestAnimationFrame(animateValue);
      
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(callback, {
  threshold: 0
});
counters.forEach(counter => {
  observer.observe(counter);
});


