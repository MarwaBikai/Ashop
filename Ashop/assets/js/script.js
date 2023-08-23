'use strict';

//modal varibales
 const modal =document.querySelector('[data-modal]');
 const modalCloseBtn =document.querySelector('[data-modal-close]');
 const modalCloseOverlay =document.querySelector('[data-modal-overlay]');


 //modal function
 const modalCloseFunc = function(){
    modal.classList.add('closed');

 }
 modalCloseOverlay.addEventListener('click' , modalCloseFunc);
 modalCloseBtn.addEventListener('click' , modalCloseFunc);



 //notification toest variables

const notificationtoest = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

//add eventlistener 
toastCloseBtn.addEventListener('click' , function(){
    notificationtoest.classList.add('closed');
})


//mobile menu variables 
const mobilemenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobilemenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay= document.querySelector('[data-overlay]');


for ( let i =0 ; i < mobilemenuOpenBtn.length;i++){
    //mobile menu function
    const mobilemenuCloseFunc = function (){
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobilemenuOpenBtn[i].addEventListener('click' , function(){
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');

    })


    mobilemenuCloseBtn[i].addEventListener('click' , mobilemenuCloseFunc);
    overlay.addEventListener('click' , mobilemenuCloseFunc);

}



// accordion variables
const accordionBtn =document.querySelectorAll('[data-accordion-btn');
const accordion =document.querySelectorAll('[data-accordion]');

for ( let i =0 ; i < accordionBtn.length;i++){
    accordionBtn[i].addEventListener('click' , function(){
        
        const clickedBtn = this.nextElementSibling.classList.contains('active');


        for ( let i =0; i < accordion.length;i++){

            if( clickedBtn){
                break;
            }
            if (accordion[i].classList.contains('active'))
            {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    });
}

