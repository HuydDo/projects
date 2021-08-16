const navMenu = () => {
  const nav = document.querySelector("nav");
  const container = document.getElementById("container");
  
  nav.classList.toggle("active-nav")
  container.classList.toggle("inactive-container")
}

// const navBar = document.querySelector('span');
// navBar.addEventListener('click', navMenu);