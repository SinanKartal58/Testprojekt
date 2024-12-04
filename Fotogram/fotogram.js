


let myImgs = [
    'img/imgs/bafetimbi-gomis-2846033_1280.jpg',
    'img/imgs/football-6398660_1280.jpg',
    'img/imgs/galatasaray-2845574_1280.jpg',
   'img/imgs/mariano-ferreira-filho-3130776_1280.jpg',
    'img/imgs/selcuk-inan-3130777_1280.jpg',
    'img/imgs/tahincioglu-basketball-super-league-2900843_1280.jpg'
    
];


function load(){

let pictures = document.getElementById('main-content');

for (let index = 0; index < myImgs.length; index++) {
    let picture = myImgs[index];

    pictures.innerHTML += pictureTemplate(index, picture);
    
}
}

function showOpenOverlay(x) {
openOverlay();
renderOverlayPicture(x);
removeDNone();

}


function addDNone() {
document.getElementById('overlay').classList.add('d-none');
}


function removeDNone() {
document.getElementById('overlay').classList.remove('d-none');
}


function toggleClassOverlay() {
document.getElementById('test').classList.toggle('content-overlay');   }


function pictureTemplate(index, picture) {
return `<img id="picture${index}" class="photo-style" src="${picture}" alt="" onclick="showOpenOverlay(${index})">`;
}



function openOverlay() {
let content = document.getElementById('overlay');

content.innerHTML = "";
content.innerHTML += overlay();   
}


function renderOverlayPicture(params) {

let contentPicture = document.getElementById('dialog-picture');
let contentNumber = document.getElementById('overlay-footer');
contentNumber.innerHTML = "";
contentPicture.innerHTML = "";

for (let index = 0; index < myImgs.length; index++){
    
    if (index == params) {
    
        let picture = myImgs[index];

        contentPicture.innerHTML += showPicture(picture);
        contentNumber.innerHTML += numberOfpicture(index, myImgs.length);
        return;
    }
    
}  
}


function overlay() {
return `
    <div class="main-content-overlay" id="test" onclick="Bubbling(event)">
        <div class="overlay-header">
            <div></div>
            <img class="button-icon alt="" onclick="addDNone()">
        </div>
        <div id="dialog-picture"></div>
        <div class="overlay-footer" id="overlay-footer"></div>
    </div>`
}


function showPicture(picture) {
return `<img class="overlay-img" src="${picture}" alt="">`;
}


function numberOfpicture(index, maxNumber) {
return `
        <img class="button-icon alt="" onclick="stepLeft(${index})">
        <p class="img-index">${index + 1}/${maxNumber}</p>   
        <img class="button-icon"  alt="" onclick="stepRigth(${index})">`;
}

function stepLeft(value) {

if (value == 0) {

    let newValue = myImgs.length -1;
    renderOverlayPicture(newValue);
}
else if(value > 0) {

    let newValue = value -1;
    renderOverlayPicture(newValue);
}
}


function stepRigth(value) {

if (value == photos.length -1) {

    let newValue = 0;
    renderOverlayPicture(newValue);
}
else if(value < myImgs.length -1) {

    let newValue = value +1;
    renderOverlayPicture(newValue);
}
}


function Bubbling(event) {

event.stopPropagation();
}


