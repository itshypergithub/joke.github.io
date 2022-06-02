




// let artist = document.getElementById("Fname")
// let art = document.getElementsByClassName("artist-name")
const joke = document.getElementById("joke")
// let out = document.querySelector(".lyrics-output pre")
let btn = document.getElementById("btn")
// let loading = document.getElementById("loading")

btn.addEventListener("click",() => {
      fetch("https://v2.jokeapi.dev/joke/Dark,Pun,Spooky,Christmas?type=single")
       
       .then( data => data.json())
       
       .then( itme =>{
           
           document.getElementById("joke").innerHTML =itme.joke
           
       })
})