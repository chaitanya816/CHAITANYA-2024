const backgroundContainer = document.querySelector('.main');
const introskill = document.querySelector(".introskill")
const introname = document.querySelector(".introname")
let currentImage = 1;

setInterval(() => {
  currentImage = currentImage === 1 ? 2 : 1;
  backgroundContainer.classList.remove(`background-image-${currentImage === 1 ? 2 : 1}`);
  backgroundContainer.classList.add(`background-image-${currentImage}`);
}, 5000);


introskill.style.display = 'block';
introname.style.display = 'none';
setInterval(() => {
  if (introskill.style.display === 'block') {
    introskill.style.display = 'none';
    introname.style.display = 'block';
  } else {
    introskill.style.display = 'block';
    introname.style.display = 'none';
  }
}, 5000);


// Bar

const progressbar = document.querySelector(".skills");
const progressline = document.querySelectorAll(".progressline");
const content = document.querySelectorAll(".content")
for (const contents of content) {


  for (const progresslines of progressline) {


    progressbar.addEventListener("mouseover", () => {

      contents.style.display = "block"
      progresslines.classList.add("progressline1");
      progresslines.classList.remove("animatebarback");

    });
    progressbar.addEventListener("mouseout", () => {
      progresslines.classList.remove("progressline1");
      progresslines.classList.add("animatebarback");
      contents.style.display = "none"

    });
  }
}

// Education Section
const educationItems = document.querySelectorAll(".educationItems");
const educationDetails = document.querySelectorAll(".educationDetails");
let open = "no";

educationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (open === "no") {
      open = "yes";
      console.log("clicked");
      educationDetails.forEach((detail, i) => {
        if (i === index) {
          detail.style.display = "block";
        } else {
          detail.style.display = "none";
        }
      });
      educationItems.forEach((eduItem, i) => {
        if (i === index) {
          eduItem.style.backgroundColor = "rgb(60, 70, 85)";
          eduItem.style.color = "white";
        } else {
          eduItem.style.backgroundColor = "rgb(60, 70, 85)";
          eduItem.style.color = "white";
        }
      });
    } else if (open === "yes") {
      open = "no";
      console.log("Again clicked");
      educationDetails[index].style.display = "none";
      item.style.backgroundColor = "rgb(60, 70, 85)";
      item.style.color = "white";
    }
  });
});

// DARK MODE

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Toogel Menu bar
const menuBtn = document.querySelector('.menuIcon');
const menubar = document.querySelector('.menubar');
const wholePage = document.querySelector('.wholePage');
const menuitems = document.querySelectorAll('.menuitems');

menuBtn.addEventListener('click', () => {
  menubar.classList.toggle('open');
  wholePage.classList.toggle('menu-open');
});

menuitems.forEach((item) => {
  item.addEventListener('click', () => {
    menubar.classList.remove('open');
    wholePage.classList.remove('menu-open');
  });
});



