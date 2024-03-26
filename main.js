const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picArray= ['eye.jpg', 'butterfly.jpg', 'egypt.jpg', 'flower.jpg', 'stone.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'eye.jpg' : 'a picture of an eye',
    'butterfly.jpg' : 'a picture of a butterfly',
    'egypt.jpg' : 'a picture of heiroglyphs',
    'flower.jpg' : 'a bush filled with purple flowers', 
    'stone.jpg' : 'a closeup of a sandstone rock'
}
/*  we want a loop, that moves through every x image of the array
and sends that to the main image of the document. */

/* in each loop, replace the xxx values with a string that will = the path to
the image and alt attributes  */


for (const image of picArray){
    console.log('image: ', image)
    const newImage = document.createElement('img');
    console.log('img: ', newImage)
    // newImage = <img />
    newImage.setAttribute('src', `images/${image}`);
    // newImage = <img src={'images/eye.jpg'}
    newImage.setAttribute('alt', alts[image]);
    // newImage = <img src={'images/eye.jpg'} alt={'a picture of an eye'} />
    thumbBar.appendChild(newImage);
    // thumbBar = <div class='thumb-bar'><img src={'images/eye.jpg'} alt={'a picture of an eye'} /></div>

    newImage.addEventListener('click', (event) => {
        // TODO NEXT - change main image to match the little image we just clicked
        displayedImage.src = `images/${image}`;
        displayedImage.alt = alts[image]; 
        
    });
}

/* darken/lighten button, we have.btn
we need to make a click event using .btn. it should...*/
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark'){
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 50%)"
        
    }
    else if (btnClass != "dark"){
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0,  0%)"
    }
})

/*1. checks the current class name set on the button, we can use getAttribute
2. if class name = dark, changes button class to light (using setAttribute*/


// return console.log('event :', event)
/*
Array = ordered list
let alphabet = ['a', 'b', 'c', 'd']

let alphabetObject = {
    first: 'a',
    second: 'b',
    third: ['c', 'd']
}

let alphabetArrayOfObjects = [ {first: 'a'}, { second: ''}]
*/



/* Wiring up the Darken/Lighten button */
