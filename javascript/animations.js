function move_to(tag1, tag2){
    $(tag1).click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(tag2).offset().top
        }, 2000);
    });
}