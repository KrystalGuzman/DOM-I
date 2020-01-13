const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Set the image for cta-img
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);
//Set the image for middle-img
let img3 = document.getElementById("middle-img");
img3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Set the h1 inside cta
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1']
//Set the button inside cta
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button']




// ANCHORS
let navItems = document.getElementsByTagName("a");
//Convert into a normal array 
let navArray = Array.from(navItems);
//Set the index to zero for use later.
var index = 0;
//Iterate over each element in the array and grab the corresponding item for it.
navArray.forEach((x) => {
  index++;
  x.textContent = siteContent['nav'][`nav-item-${index}`]
  x.style.color = 'green'
})
// MAIN-CONTENT

//Grab all H4 elements within the document
let H4All = document.querySelectorAll('h4');
//Cannot iterate over these because they are in seperate sections.
H4All[0].textContent = siteContent['main-content']['features-h4']
H4All[1].textContent = siteContent['main-content']['about-h4']
H4All[2].textContent = siteContent['main-content']['services-h4']
H4All[3].textContent = siteContent['main-content']['product-h4']
H4All[4].textContent = siteContent['main-content']['vision-h4']
//Grab all p elements within the document
let pAll = document.querySelectorAll('p');
//Cannot iterate over these because they are in seperate sections.
pAll[0].textContent = siteContent['main-content']['features-content']
pAll[1].textContent = siteContent['main-content']['about-content']
pAll[2].textContent = siteContent['main-content']['services-content']
pAll[3].textContent = siteContent['main-content']['product-content']
pAll[4].textContent = siteContent['main-content']['vision-content']

//Contact
H4All[5].textContent = siteContent['contact']['contact-h4']
pAll[5].textContent = siteContent['contact']['address']
pAll[6].textContent = siteContent['contact']['phone']
pAll[7].textContent = siteContent['contact']['email']
//Set the last P element in the footer of the page
pAll[8].textContent = siteContent['footer']['copyright']


// anchors append prepend

const navA = document.createElement("a");
const navB = document.createElement("a");

navA.textContent = "Support";
navB.textContent = "Form";
//style
navA.style.color = "green";
navB.style.color = "green";

headerNav = document.querySelector('header nav');
headerNav.appendChild(navA); 
headerNav.prepend(navB);