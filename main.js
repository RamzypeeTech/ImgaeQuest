let imageShowcase = document.querySelector("#imageShowcase");
let searchButton = document.querySelector("#searchicon-con");
let searchInput = document.querySelector("input");
let spinnerCon = document.querySelector("#spinner-con");
let searchIcon = document.querySelector("#searchicon-con i");
// Making a request to pexels api
fetch("https://api.pexels.com/v1/search?query=man", {
  headers: {
    Authorization: "cnApHD5xK5W8Fys3FbVa1YxKvyy9FdsG73bASVVfH23zdIWTHzLn4QfD", // specifying API key after headers then authorization
  },
})
  .then((res) => res.json())
  .then((data) => {
    // slowing images from displaying till after 2second which is 2000ms
    setTimeout(() => {
      spinnerCon.style.display = "none";
      data.photos.forEach((photo) => {
        imageShowcase.innerHTML += `<div><img src=${photo.src.original}/></div>`;
      });
    }, 2000);
  });

// adding on click event on button
searchButton.onclick = () => {
  // removing images before adding the new images from search
  imageShowcase.innerHTML = "";
  // showing spinner before images loads
  spinnerCon.style.display = "flex";
  // showing spinner on search icon instead of icon on button click
  searchIcon.className = "fa-solid fa-circle-notch";
  fetch(`https://api.pexels.com/v1/search?query=${searchInput.value}`, {
    headers: {
      Authorization: "cnApHD5xK5W8Fys3FbVa1YxKvyy9FdsG73bASVVfH23zdIWTHzLn4QfD",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // slowing images from displaying till after 2second which is 2000ms
      setTimeout(() => {
        spinnerCon.style.display = "none";
        searchIcon.className = "fa-solid fa-magnifying-glass";

        data.photos.forEach((photo) => {
          imageShowcase.innerHTML += `<div><img src=${photo.src.original}/></div>`;
        });
      }, 2000);
    });
};
