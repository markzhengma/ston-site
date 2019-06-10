window.onload = function(){
    var quote = document.getElementById("quote");
    quote.setAttribute("style", `background-image: url('./Images/Quotes/quote_${Math.ceil(Math.random() * 3)}.png')`);

    let $lpBtn = $('#lp-btn');
    let $tlBtn = $('#tl-btn');
    let $tourBtn = $('#tour-btn');
    let $galleryBtn = $('#gallery-btn');

    $lpBtn.click(function(){
        $('html,body').animate({'scrollTop': $('#lp-sec').offset().top}, 600);
    });
    $tlBtn.click(function(){
        $('html,body').animate({'scrollTop': $('#timeline-sec').offset().top}, 600);
    });
    $tourBtn.click(function(){
        $('html,body').animate({'scrollTop': $('#tour-sec').offset().top}, 600);
    });
    $galleryBtn.click(function(){
        $('html,body').animate({'scrollTop': $('#gallery-sec').offset().top}, 600);
    });

    var currentImgIndex = 4;
    let $galleryImgs = $('.gallery-single');
    for(var i = 0; i < $galleryImgs.length; i ++){
        $galleryImgs[i].setAttribute('style', `background-image: url("./Images/Gallery/gallery_${i}.jpg")`);
    }
}