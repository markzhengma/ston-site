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
    let $compareIndexArr = [0, 1, 2, 3, 4];
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
    let $mapBtn = $('#map-btn');
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
    $mapBtn.click(function(){
        $('html,body').animate({'scrollTop': $('#map-sec').offset().top}, 600);
    });

    let $mapList = $('#map-list');
    let $mapDesc = $('#map-desc');
    let $mapBox = $('#map-box');

    if($(window).width() >= 1100){
        $mapList.removeClass('list-hide');
        $mapList.addClass('list-show');
    }else{
        $mapList.removeClass('list-show');
        $mapList.addClass('list-hide');
    };
    
    $mapBox.click(function(){
        if($mapList.hasClass("list-show") && $(window).width() < 1100){
            $mapList.removeClass("list-show");
            $mapList.addClass("list-hide");
        }
    });
    let locationArr = [
        {
            title: "Stonewall Inn", 
            desc: "The Stonewall Inn was one of the few places that welcomed LGBTQ patrons. It was popular for dancing and attracted mostly male patrons.  It was accessible to drag queens, transgendered people, homeless youth, and butch lesbians looking for a safe space.  It was also a racially diverse bar.  Raids were frequent at the Stonewall Inn and other gay bars.  On June 28, 1969 at 1:20am, four plainclothes officers initiated an unannounced raid that attracted attention and crowds and sparked Stonewall riots."
        },
        {
            title: "Mattachine Society",
            desc: "The Mattachine Society was one of the earliest LGBTQ organizations.  They were known for raising personal and social education about the rights and activities of LGBTQ people.  After Stonewall, the Mattachine Society slowly declined as it was deemed too traditional in the civil rights era. The Mattachine Society of NYC was housed at 59 Christopher St., near the Stonewall Inn and today is the Kettle of Fish Bar."
        },
        {
            title: "Julius’ Bar",
            desc: "Prior to Stonewall, Julius’ Bar was an important site of LGBTQ resistant.  Numerous sip-ins, taken from civil rights lunch counter sit-ins, occurred here beginning in 1966."
        },
        {
            title: "Oscar Wilde Bookshop",
            desc: "The Oscar Wilde Bookshop was originally located on Mercer St. and moved to Christopher St. in 1973 to be closer to the heart of gay life. The bookstore was an important location for finding LGBTQ liberation materials.  Many gay writers visited the store when in NYC.  The owners documented the Stonewall riots."
        },
        {
            title: "Christopher Park",
            desc: "Christopher Park is today the site of the Stonewall National Park and the Gay Liberation Monument.  The park was a popular hangout for gay homeless youth in the 1960s.  During the Stonewall Riots in 1969, crowds filled this space. It was a center of the riots against anti-LGBTQ police raids.  The riots flowed from the park and filled the adjacent streets.  It remains a central location for LGBTQ activism."
        },
        {
            title: "Washington Place",
            desc: "The Christopher Street Liberation Day March took thousands of people from Washington Place to Sheep’s Meadow in Central Park.  Held on June 28, 1970, one year after the Stonewall Uprising, it became NYC’s first Gay Pride March."
        },
        {
            title: "Snake Pit",
            desc: "The Snake Pit was another gay-run after hours bar.  It was raided March 8, 1970.  The police arrested 167 people and an Argentinian immigrant was impaled when he jumped or was pushed from the second story at the police station.  This event, near to and less than a year after Stonewall, encouraged even more people to join the LGBTQ Revolution."
        },
        {
            title: "Gay Liberation Front’s Alternate U",
            desc: "The Gay Liberation Front was an activist organization formed following Stonewall. “The Gay Liberation Front is a militant coalition of radical and revolutionary homosexual men and women committed to fight the oppression of the homosexual as a minority group and to demand the right to self-determination of our own bodies”.  Gay Liberation Front, February 1970 newsletter"
        },
        {
            title: "Washington Square Park",
            desc: "One month after the Stonewall raid and uprising, 500 activists gathered in Washington Square Park for a “Gay Power” demonstration, a first LGBTQ rally in NYC."
        },
        {
            title: "Greenwich Village",
            desc: "Greenwich Village was an important counterculture site during the 1960s.  In addition to other civil rights activities, it was housed to a gay bookstore and most gay and lesbian establishments in NYC."
        }
    ];
    for(var i = 0; i < locationArr.length; i ++){
        let mapSingle = $('<div class = "map-list-single">'
        + '<div class = "map-icon"></div>'
        + '<div class = "map-list-p">' 
        + locationArr[i].title
        + '</div>');
        let desc = locationArr[i].desc;
        let index = i;
        mapSingle.click(function(){
            if(!$mapList.hasClass("list-show")){
                $mapList.removeClass("list-hide");
                $mapList.addClass("list-show");
            }else{
                $mapDesc.html(desc);
                $mapBox.css('background-image', 'url("./Images/Map/map_' + index + '.png")')
            }
        });
        $mapList.append(mapSingle); 
    }
}