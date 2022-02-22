$(document).ready(() => {
    let x = 0;
    $(".fa-bars").click(() => { 
        $("#sections").slideToggle(500);
    })
    $(window).on("resize", function (event) {
        
        if ($(window).width() > 0) {
            x = 0;
            $(".fa-bars").css("transform", `rotate(0deg)`);
        }
        if ($(window).width() > 683) {
            $("#sections").css("display", "flex");
            $(".fa-bars").css("transform", `rotate(0deg)`);
        }
        if ($(window).width() <= 683) {
            $("#sections").css("display", "none");
        }
    });
    
    $(".fa-bars").click(() => {
        x = x + 90;
        $(".fa-bars").css("transform", `rotate(${x}deg)`);
    })
})


const aList = document.querySelectorAll('a');
console,console.log(aList);
//function to prevent default and use scrollIntoView

const scrollToSection=function(event){

    event.preventDefault();

    const selectedSection =document.getElementById(event.target.getAttribute('data-link'));

    selectedSection.scrollIntoView({ block: 'start',  behavior: 'smooth' });
};

//addEventListener  for each <a>

for(let a of aList){

    a.addEventListener('click',scrollToSection);

};