
let title = document.getElementById('website_title');

console.log(title.innerHTML);
title.innerHTML = "neuer Titel";


document.getElementById('test-div').innerHTML ='test';


document.getElementById('test-div').classList.add('green_bg');
document.getElementById('test-div').classList.remove('green_bg');
document.getElementById('test-div').classList.toggle('green_bg');




let value = 123456

document.getElementById('HA-test').innerHTML = (value , '123456');