
// MENU SLIDER

const content = document.querySelector('.subMenu__mainContent');
const element = document.querySelectorAll('.subMenu__mainElement');
const listMenu = document.querySelector('.menu__listItem--menu')
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const sliderImg = document.querySelectorAll('.sliderImg');
const animateActive = document.querySelectorAll('.animate--active');
const btnSlider = document.querySelectorAll('.buttonSlider--click');

let width = 255;
let size = element.length;
let count = 0;


intervalMenu = setInterval( () => {

    content.style.transition = '0.5s all linear';
    count++;
    content.style.transform = `translateX(${-count * width}px)`;

    nextBtn.classList.remove('btn--active');
    prevBtn.classList.add('btn--active');

    
    nextBtn.addEventListener( 'click' ,() => {

        count = 0;
        content.style.transform = `translateX(${-count * width}px)`;

        nextBtn.classList.add('btn--active');
        prevBtn.classList.remove('btn--active');

    });

    if( count == size/2 ) {

        setTimeout( () => {

            content.style.transition = 'none';
            count = 0;
            content.style.transform = 'translateX(0px)';

            nextBtn.classList.add('btn--active');
            prevBtn.classList.remove('btn--active');
            
        }, 500);

    }

}, 6000);

//slider

setInterval( () => {

    //Slider
    sliderImg.forEach( item => { item.classList.toggle('active') });

    // Title animation
    animateActive.forEach( item => { item.classList.toggle('active') });

    // Button slider
    btnSlider.forEach( item => { item.classList.toggle('active') });

}, 15000);

btnSlider[0].addEventListener('click', () => {

    if( !btnSlider[0].classList.contains('active') ) {

        //Slider
        sliderImg.forEach( item => { item.classList.toggle('active') });

        // Title animation
        animateActive.forEach( item => { item.classList.toggle('active') });

        // Button slider
        btnSlider.forEach( item => { item.classList.toggle('active') });

    };
});

btnSlider[1].addEventListener('click', () => {

    if( !btnSlider[1].classList.contains('active') ) {

        //Slider
        sliderImg.forEach( item => { item.classList.toggle('active') });

        // Title animation
        animateActive.forEach( item => { item.classList.toggle('active') });

        // Button slider
        btnSlider.forEach( item => { item.classList.toggle('active') });
        
    };
});

// contain discover

const containDiscover = document.querySelector('.contain__discoverMore');
const containDiscoverBg = document.querySelector('.contain__discoverMore-bg');

window.addEventListener('scroll', () => {

    let containDiscover_Top = containDiscover.getBoundingClientRect().top;

    if( containDiscover_Top < -125 || containDiscover_Top > 125) return;

    containDiscoverBg.style.transform = `translateY(${-containDiscover_Top*0.5}px)`;
});

// category

const categoryContent = document.querySelectorAll('.categoryContent');
const categoryItem = document.querySelectorAll('.categoryItem');
function categoryAnimate( id ) {

    document.querySelector(`#${id}`).addEventListener('click', () => {
        
        for ( let i = 0 ; i < categoryContent.length ; i++) {
            categoryContent[i].classList.remove('active');
            categoryItem[i].classList.remove('active');
        }

        document.querySelector(`#category${id}`).classList.add('active');
        document.querySelector(`#${id}`).classList.add('active');
    })

}

categoryAnimate('Breakfast');
categoryAnimate('Launch');
categoryAnimate('Dinner');
categoryAnimate('Dessert');
categoryAnimate('Drinks');
categoryAnimate('Sides');
