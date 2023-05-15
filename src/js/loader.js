const loader = document.getElementById("loader");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function makeRequest() {
  showLoader();
 
  fetch(url)
    .then(response => {
    })
    .catch(error => {
    })
    .finally(() => {
      hideLoader();
    });
}