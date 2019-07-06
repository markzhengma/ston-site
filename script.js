window.onload = function(){
    let $quote = $("#quote");
    // let quoteArr = [
    //     '"Stonewall wasn’t done out of a sense of pride. It was done after a buildup of shit from constant police raids in Greenwich Village. It just came to a head like a pimple — and it got popped. The memory of that first night doesn’t come to me with a sense of joy or happiness, because so many of the girls and a few guys got really hurt. After the city police barged into the bar — with numbers and attitude — the prevalent feeling that night was fear. Looking at the riot squad was like watching Star Wars stormtroopers, but they were in black with riot gear, sticks, guns, mace, helmets, and shields. The brutalization as they moved across and down the street was like a tidal wave hitting a coastline city. It just hit and rolled over you. If you fought, you’d wind up down, and if you were down, they would keep beating on you."<br/><br/><b>- Miss Major</b>',
    //     '"This is a month that\'s very important. I may have a lot of anger but it means a lot to me because after being at World Pride last year in Italy, to see 500,000 beautiful, liberated gay men, women, and trans people and being called the mother of the world\'s transgender movement and the gay liberation movement, it gives me great pride to see my children celebrating. But I just hope that [...]  as far as people realizing that the trans community was your benefactor and that people are opening up their eyes. But you got to remember, don\'t just say that because we\'re here; show your support when we send out a call for action to support our actions, the things that we plan to do."<br/><br/><b>- Sylvia Rivera</b>',
    //     '"History isn’t something you look back at and say it was inevitable. It happens because people make decisions that are sometimes very impulsive and of the moment, but those moments are cumulative realities."<br/><br/><b>- Marsha P. Johnson (from a clip in The Life & Death of Marsha P. Johnson, 2018)</b>',
    //     '"I\'d like to see the gay revolution get started, but there hasn\'t been any demonstration or anything recently. You know how the straight people are. When they don\'t see any action they think, \'Well, gays are all forgotten now, they\'re worn out, they\'re tired.\' ... If a transvestite doesn\'t say I\'m gay and I\'m proud and I\'m a transvestite, then nobody else is going to hop up there and say I\'m gay and I\'m proud and I\'m a transvestite for them."<br/><br/><b>- Marsha P. Johnson (from an interview in Out of the Closets: Voices of Gay Liberation, 1972)</b>'
    // ]
    // quote.setAttribute("style", `background-image: url('./Images/Quotes/quote_${Math.ceil(Math.random() * 3)}.png')`);
    // $quote.html(quoteArr[Math.floor(Math.random() * 4)]);
    if(window.innerWidth <= 599){
        $quote.css('background-image', 'url("./Images/Quotes/quote_mobile_' + Math.ceil(Math.random() * 4) + '.png")');
    }else{
        $quote.css('background-image', 'url("./Images/Quotes/quote_' + Math.ceil(Math.random() * 4) + '.png")');
    }

    let $compareImg = $("#diff-img");
    let $compareIndexArr = [0, 1];
    $compareImg.css("background-image", "url('./Images/Compares/compare_0.jpg')");
    let $prevCompareBtn = $("#prev-btn");
    let $nextCompareBtn = $("#next-btn");
    let currentCompareIndex = 0;
    $prevCompareBtn.click(function(){
        if(currentCompareIndex > 0){
            currentCompareIndex -= 1;
            $compareImg.css("background-image", `url('./Images/Compares/compare_${currentCompareIndex}.jpg')`);
        }else if(currentCompareIndex == 0){
            currentCompareIndex = $compareIndexArr[$compareIndexArr.length - 1];
            $compareImg.css("background-image", `url('./Images/Compares/compare_${currentCompareIndex}.jpg')`);
        }else{
            console.log(currentCompareIndex);
        }
    })
    $nextCompareBtn.click(function(){
        if(currentCompareIndex < $compareIndexArr[$compareIndexArr.length - 1]){
            currentCompareIndex += 1;
            $compareImg.css("background-image", `url('./Images/Compares/compare_${currentCompareIndex}.jpg')`);
        }else if(currentCompareIndex == $compareIndexArr[$compareIndexArr.length - 1]){
            currentCompareIndex = $compareIndexArr[0];
            $compareImg.css("background-image", `url('./Images/Compares/compare_${currentCompareIndex}.jpg')`);
        }else{
            console.log(currentCompareIndex);
        }
    })

    let $lpBtn = $('#lp-btn');
    let $tlBtn = $('#tl-btn');
    let $tourBtn = $('#tour-btn');
    let $galleryBtn = $('#gallery-btn');
    let $quoteBtn = $('#quote-btn')

    $lpBtn.click(function(){
        $('html,body').animate({'scrollTop': $('#lp-sec').offset().top}, 600);
    });
    $quoteBtn.click(function(){
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

    let currentImgIndex = 4;
    let $galleryImgs = $('.gallery-single');
    for(var i = 0; i < $galleryImgs.length; i ++){
        $galleryImgs[i].setAttribute('style', `background-image: url("./Images/Gallery/gallery_${i}.jpg")`);
    }
}