function hide(){
    $('.blue h1').removeClass('bounceInLeft');
    $('.blue h3').removeClass('bounceInLeft');
    $('.blue h1').addClass('bounceOutLeft');
    $('.blue h3').addClass('bounceOutLeft');
    $('.grey h1').removeClass('bounceInRight');
    $('.grey h3').removeClass('bounceInRight');
    $('.grey h1').addClass('bounceOutRight');
    $('.grey h3').addClass('bounceOutRight');
    $('.whiteOR1').removeClass('bounceInDown');
    $('.whiteOR2').removeClass('bounceInDown');
    $('.whiteOR1').addClass('bounceOutUp');
    $('.whiteOR2').addClass('bounceOutUp');
    $('.whiteG').removeClass('slideInUp');
    $('.whiteG').addClass('slideOutDown');
    $('.blue').addClass('bounceOutLeftD');
    $('.grey').addClass('bounceOutRightD');
    setTimeout(openL, 1800);
};

function openL(){
    location.href = 'welcome.html';
};

function tot() {

};
