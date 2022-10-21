window.addEventListener('DOMContentLoaded', (event) => {
const box = document.getElementById("box");
box.addEventListener('keypress', (event) => {
   if(event.target.value.length < 3) return;
   fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${event.target.value}&api_key=ae6ff99bd63c6a3f93fd33630d30f355&format=json`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    for(j = 0; j <= data.results.trackmatches.track.length-1; j++) {
        document.getElementById("results").innerHTML += data.results.trackmatches.track[j].name+"<br>";
    }
  });

  
})});