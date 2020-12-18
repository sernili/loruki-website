// Soft scroll with scroll button
document.querySelector('.scroll-btn').addEventListener("click", () => {
    document.querySelector('html').style.scrollBehavior = "smooth";
    
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000)
});

// Hide scroll button when on top
const arrowButton = document.querySelector(".scroll-btn");

let hidden = true;

window.onscroll = function(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // when not at top
        if (arrowButton.classList.contains('hide-btn')) {
            arrowButton.classList.remove('hide-btn');
        } 
        
    } else {
        // when at top
        if (!arrowButton.classList.contains('hide-btn')) {
            arrowButton.classList.add('hide-btn');
        } 
    }
}






// let height = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );

// const faIcon = document.querySelector(".scroll-btn i");
// const arrowButton = document.querySelector(".scroll-btn");

// console.log(height-500);


// window.onscroll = function(){
           
//     if (document.body.scrollTop > height-600 || document.documentElement.scrollTop > height-600) {
//         // at the buttom
//         if (faIcon.classList.contains('fa-arrow-down') || arrowButton.classList.contains('hidden')) {
//             faIcon.classList.remove('fa-arrow-down');
//             faIcon.classList.add('fa-arrow-up');
//             arrowButton.classList.remove('hidden');
//         }    
        
//         console.log("Bottom!")
//     }
//     else if (document.body.scrollTop > height/6 || document.documentElement.scrollTop > height/6) {
//         if (arrowButton.classList.contains('hidden')){
//             arrowButton.classList.remove('hidden');
//         }    
//         console.log("SHOW!") 
//     } else {
//         // at the top
//         if (!faIcon.classList.contains('fa-arrow-down') || !arrowButton.classList.contains('hidden')) {
//             faIcon.classList.add('fa-arrow-down');
//             faIcon.classList.remove('fa-arrow-up');
//             arrowButton.classList.add('hidden');

//         } 
//     }
// }

// To switch between up and down button
// let height = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );

// const faIcon = document.querySelector(".scroll-btn i");
// const arrowButton = document.querySelector(".scroll-btn");

// console.log(height-500);


// window.onscroll = function(){
           
//     if (document.body.scrollTop > height-600 || document.documentElement.scrollTop > height-600) {
//         // at the buttom
//         if (faIcon.classList.contains('fa-arrow-down') || arrowButton.classList.contains('hidden')) {
//             faIcon.classList.remove('fa-arrow-down');
//             faIcon.classList.add('fa-arrow-up');
//             arrowButton.classList.remove('hidden');
//         }    
        
//         console.log("Bottom!")
//     }
//     else if (document.body.scrollTop > height/6 || document.documentElement.scrollTop > height/6) {
//         if (arrowButton.classList.contains('hidden')){
//             arrowButton.classList.remove('hidden');
//         }    
//         console.log("SHOW!") 
//     } else {
//         // at the top
//         if (!faIcon.classList.contains('fa-arrow-down') || !arrowButton.classList.contains('hidden')) {
//             faIcon.classList.add('fa-arrow-down');
//             faIcon.classList.remove('fa-arrow-up');
//             arrowButton.classList.add('hidden');

//         } 
//     }
// }


// Change Layout of footer on small screen sizes
const mediaQuery = window.matchMedia('(max-width: 768px)')

if (mediaQuery.matches) {
    document.querySelector('footer .container').classList.remove('grid-3', 'grid');
} 