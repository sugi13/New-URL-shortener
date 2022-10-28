let url = "https://api.shrtco.de/v2/";
let inputField = document.getElementById("URL-field");
let button = document.getElementById("btn");
let linkContainer = document.querySelector(".link");

function fetchData(){
  fetch(`${url}shorten?url=${inputField.value}/long/link.html`)
  .then(response=>{
  return response.json();
  })
  .then((data)=>{
    let listElement = document.createElement("li");
    listElement.innerHTML = data.result.full_short_link;
    linkContainer.appendChild(listElement);

    // function copy to clipboard //
    function copyText(){
      alert("text copied!");
      navigator.clipboard.writeText(data.result.full_short_link);
    }
    linkContainer.addEventListener("click", copyText)
  })
  
}

button.addEventListener("click", fetchData)