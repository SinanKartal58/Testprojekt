
let myList = [12, "Banana", true];

function initArrays(){


    let refList = document.getElementsByClassName('red_box')

    for (let index = 0; index < refList.length; index++) {
        const SingleRef = refList[index];
        SingleRef.innerText = index;
    }
}