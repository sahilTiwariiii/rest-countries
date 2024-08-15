const mainCountryContainer = document.querySelector('.whole-cards');
const filterByRegion = document.querySelector('.maro');
const inputfield = document.querySelector('.left input');

const moon=document.querySelector('#dark')
const container=document.querySelector('.container')
const input=document.querySelector('input')
const select=document.querySelector('select')
// const search=document.querySelector('#search')
const left=document.querySelector('.left')
const themename=document.querySelector('.themename')
const maincontaier=document.querySelector('.main-conatiner')
let countryData = []; // Array to store country data
fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    countryData = data; // Store the fetched country data
    updateCountryCards(countryData); // Display all countries initially
  });

// Function to update country cards in the container
function updateCountryCards(countries) {
  mainCountryContainer.innerHTML = ''; // Clear existing cards
  countries.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('content-container');
    // dont remember to add trim() because if you not do that then in url we cannot get the full name if we not use that it will just give us first name of country which can give error and not fetching all the country details page
    const encodedName = encodeURIComponent(country.name.common.trim()); // Encode the country name
    const href = `/country.html?name=${encodedName}`;
    
    countryCard.innerHTML = `
      <a href="${href}">
        <img class="immg" src="${country.flags.svg}">
        <h2 class="namee">${country.name.common}</h2>
        <h4 class="pop">Population: <span>${country.population.toLocaleString('en-IN')}</span></h4>
        <h4 class="re">Region: <span>${country.region}</span></h4>
        <h4 class="cap">Capital: <span>${country.capital ? country.capital : 'N/A'}</span></h4>
      </a>
    `;
    
    mainCountryContainer.append(countryCard);
  });
}


// Filter by region select
filterByRegion.addEventListener('change', (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((data) => {
      updateCountryCards(data); // Update the cards based on the selected region
    });
});

// Search query
inputfield.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filteredCountries = countryData.filter(country => 
    country.name.common.toLowerCase().includes(query)
  );
  updateCountryCards(filteredCountries); // Update the cards based on the search query
});

// const moon='<i class="fa-solid fa-moon"></i>'

// fetch('https://restcountries.com/v3.1/all')
// .then((res)=> res.json())
// .then((data)=>{
//     data.forEach(country => {
//         console.log(country)
//     });
// })



let isToggle=false;
moon.addEventListener('click',()=>{
    isToggle=!isToggle
    if(isToggle){
      moon.classList.remove('fa-moon')
      moon.classList.add('fa-sun')
        document.body.style.backgroundColor="#202C37";
        // toh humne div create kiya hai DOM me js ke maddat se jis div ki class hai 'content-container' aur hum keval foreach loop ki maddat se hi usme background color de sakte hai direct nahi de sakte aur direct background color denge toh overwrite ho ga aur acche kam nahi karega 
        document.querySelectorAll('.content-container').forEach(card => {
          card.style.backgroundColor = "#2B3945";
      });
        document.body.style.color="white"
        container.style.backgroundColor="#2B3945";
      
        container.style.color="white"
        input.style.backgroundColor="#2B3945";
        // input.style.color="white"
        // search.style.backgroundColor="#2B3945";
        // search.style.color="white"
        select.style.backgroundColor="#2B3945"
        select.style.color="white"
        // cardcontainer.classList('meow')
       
        left.style.backgroundColor="#2B3945"
        themename.innerHTML=""
        themename.innerHTML="Light Mode"
        maincontaier.style.backgroundColor="#2B3945"
        

    }
    else{
      moon.classList.remove('fa-sun')
      moon.classList.add('fa-moon')
        document.body.style.backgroundColor="";
        document.querySelectorAll('.content-container').forEach(card => {
          card.style.backgroundColor = "";
      });
        document.body.style.color=""
        container.style.backgroundColor="";
        container.style.color=""
        input.style.backgroundColor="";
        // input.style.color="white"
        // search.style.backgroundColor="white";
        // search.style.color=""
        select.style.backgroundColor=""
        select.style.color=""
      
        left.style.backgroundColor="white"
        themename.innerHTML=""
        themename.innerHTML="Dark Mode"
         maincontaier.style.backgroundColor=""
       
        // moon.innerHTML=`<i class="fa-solid fa-moon" id="dark"></i>`
    }
    // localStorage.setItem(isToggle=false)
})

// function toggleIcon(){
//   if(moon.innerHTML.includes('fa-moon')){
//     moon.classList.remove('fa-moon')
//    moon.classList.add('fa-sun')
//   }
//   else{
//     moon.classList.remove('fa-sun')
//    moon.classList.add('fa-moon')
//   }
//  }
//    moon.addEventListener('click',toggleIcon)
// moon.addEventListener('click',()=>{
//   console.log("first")
//   document.body.classList.toggle('darkk');
// })

// here we had created the 'anchor' tag using javascript
// const mainCountryContainer=document.querySelector('.whole-cards')
// const countryCard=document.createElement('div')
// const anchortag=document.createElement('a')
// const cardImg=document.createElement('img')
// const htwo=document.createElement('h2')
// const populattion=document.createElement('h4')
// const region=document.createElement('h4')
// const capital=document.createElement('h4')
// // here we add the 'class' to the element which we had created which is 'countryCard'
// // countryCard.classList.add('')
// countryCard.classList.add('content-container')
// countryCard.append(anchortag)
// cardImg.classList.add('immg')
// cardImg.src="https://flagcdn.com/gs.svg"
// anchortag.append(cardImg)
// htwo.classList.add('namee')
// anchortag.append(htwo)
// populattion.classList.add('pop')
// region.classList.add('re')
// capital.classList.add('cap')
// anchortag.append(populattion,region,capital);

// so above is the very long and  messy process so we can done above thing in short 
// const cardHTML=`
// <div class="content-container">
//          <a href="#">
//         <img class="immg" src="https://flagcdn.com/ug.svg" alt="">
//         <h2 class="namee">South Georgia</h2>
//         <h4 class="pop">Popullation: 30</h4>
//         <h4 class="re">Region: Antarctic</h4>
//         <h4 class="cap">Capital: King Adward Point</h4>
        
//     </a>
//     </div>
// `

// countryCard.innerHTML=cardHTML;
// mainCountryContainer.append(countryCard)
