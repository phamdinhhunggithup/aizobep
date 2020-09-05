$(function () {
    // Popup modal video
    handleTogglePopupModelVideo();
    function handleTogglePopupModelVideo()
    {
        let buttonOpenVideoEl  = $(".ldp-video-wp .video-icon");
        let buttonCloseVideoEl = $(".popup-modal-video .close-modal-video");
        let popupModalVideoEl  = $(".popup-modal-video");
        buttonOpenVideoEl.click(function () {
            popupModalVideoEl.addClass('open');
        });
        buttonCloseVideoEl.click(function () {
            popupModalVideoEl.removeClass('open');
        });
    }
});


$(function () {
    var listImg = [
        { button : ".nb-slider-wp .item .thumbNail"},
        { button : ".prod-discount-img .thumbNail"},
        { button : ".ab-img-wp .thumbNail"},
        { button : ".more-wp .thumbNail"},
        { button : ".choose-image .thumbNail"},
        { button : ".ldp-faq-wrapper .thumbNail"},
        { button : ".ldp-pricing-wp .thumbNail"},
        
    ];
    let modalWpEl    = $(".popup-modal-images");
    let imgModalEl   = $("#img-show-banner");
    let closeModalEl = $(".popup-modal-images .close-modal-image");

    listImg.forEach(item => {
        $(item['button']).click(function() {
            let imgThis = $(this).find('img').attr('src');
            imgModalEl.attr('src', imgThis);
            modalWpEl.addClass('open');
        });
        closeModalEl.click(function () {
            modalWpEl.removeClass('open');
        });
        modalWpEl.click(function () {
            modalWpEl.removeClass('open');
        });
    });
});