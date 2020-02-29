$(function() {
    $('.header').height($(window).height());
})

$(function () {
$('.carousel').carousel( {interval: 3000} );
})

const el = document.querySelectorAll("div.card, div.border");
el.addEventListner('hover', borderHover);
function borderHover() {
document.querySelectorAll("div.card, div.border").style.borderColor = 'red';
}