 /*const goTopBtn = document.querySelector('.go-top-btn')

window.addEventListener('scroll' , checkHeight)

function checkHeight(){
if(window.scrollY > 200){
goTopBtn.computedStyleMap.display =" flex"

} else {
    goTopBtn.computedStyleMap.display ="none"
}

}
goTopBtn.addEventListener('click',() =>  {

window.scrollTo({
top:0,
behavior:"smooth"

})
     
}
)
*/
document.addEventListener("DOMContentLoaded", function() {
    const goTopBtn = document.querySelector('.go-top-btn');

    window.addEventListener('scroll', checkHeight);

    function checkHeight() {
        if (window.scrollY > 1000) {
            goTopBtn.style.display = "flex"; // Set display to "flex" when scrolled down
        } else {
            goTopBtn.style.display = "none"; // Set display to "none" otherwise
        }
    }

    goTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
