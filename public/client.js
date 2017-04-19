/*jshint esversion: 6 */

const keyword = document.querySelector('#keyword');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const player_table = document.querySelector('.player_table');

// General function that will be used to request data
function onRequestData(url, listener){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', listener);
    oReq.open('GET',url);
    oReq.send();
}

button1.addEventListener("click",function(){
  onRequestData(`https://localhost:3000/`, getScore);
});

function getScore() {
  const requestData = JSON.parse(this.responseText);
  console.log(requestData);

}
