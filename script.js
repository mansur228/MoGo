$(document).ready(function() {


    const anchors = document.querySelectorAll('a[href^="#"]')

    for(let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }

    var nav = $("nav"),
        header = $("header").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /* Fixed Heder */
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
         if( scrollOffset >= header){
            nav.addClass("fixed");
        }else{
            nav.removeClass("fixed");
        }
    }


    function setRandomValue1(){
        let i1 = 0;
        document.getElementsByClassName('header-slider-progress')[i1].style = `width:${Math.round(Math.random() * 100)}%;`;
    }

    function setRandomValue2(){
        let i2 = 1;
        document.getElementsByClassName('header-slider-progress')[i2].style = `width:${Math.round(Math.random() * 100)}%;`;
    }

    function setRandomValue3(){
        let i3 = 2;
        document.getElementsByClassName('header-slider-progress')[i3].style = `width:${Math.round(Math.random() * 100)}%;`;
    }

    function setRandomValue4(){
        let i4 = 3;
        document.getElementsByClassName('header-slider-progress')[i4].style = `width:${Math.round(Math.random() * 100)}%;`;
    }

    function setRandomValue(){
        setRandomValue1();
        setRandomValue2();
        setRandomValue3();
        setRandomValue4();
    }

    setInterval(setRandomValue , 3000);


    let j = 0;
    setInterval(function(){
        document.getElementsByClassName('statisticNum')[0].textContent = Math.round(Math.random() * 120);
        document.getElementsByClassName('statisticNum')[1].textContent = Math.round(Math.random() * 120);
        document.getElementsByClassName('statisticNum')[2].textContent = Math.round(Math.random() * 120);
        document.getElementsByClassName('statisticNum')[3].textContent = Math.round(Math.random() * 120);
        document.getElementsByClassName('statisticNum')[4].textContent = Math.round(Math.random() * 120);
        j++;
        document.querySelector('.teamNum').textContent = j;
    } , 1000);

    let delpoyedList = $('.whatwedodeployer');
    delpoyedList.click(function(){
        this.classList.toggle('active')
    });

    $('.slider').slick();

    let eyeWhatched = $('.eye-whatched');

    eyeWhatched[0].textContent = Math.round(Math.random() * 1000);
    eyeWhatched[1].textContent = Math.round(Math.random() * 1000);
    eyeWhatched[2].textContent = Math.round(Math.random() * 1000);

    let commentPosted = $('.comment-posted');

    commentPosted[0].textContent = Math.round(Math.random() * 1000);
    commentPosted[1].textContent = Math.round(Math.random() * 1000);
    commentPosted[2].textContent = Math.round(Math.random() * 1000);
});