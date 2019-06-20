jQuery(window).load(function () {

    /*
        Stop carousel
    */
    $('.carousel').carousel('pause');

});


$('.btn-customized').on('click', myFunction());



function playpause() {
    if (!$(this).hasClass('paused')) {
        $('.carousel').carousel('pause');
        $('.btn-customized').toggleClass('paused');
        $('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
        $(this).blur();
    } else {
        $('.carousel').carousel('cycle');
        $('.btn-customized').toggleClass('paused');
        $('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
        $(this).blur();
    }

}