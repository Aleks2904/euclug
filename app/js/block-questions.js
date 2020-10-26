$( document ).ready(function(){
    const btn = $('.questions__btn-questions'),
          body = $('body');

    let activeSlide;

    body.on('click',function(e){
        if(activeSlide != undefined){
            if(activeSlide.has(e.target).length === 0){
                close();
            }
        }
    })

    btn.on('click', function(e){
        if(activeSlide != undefined){
            if(activeSlide.has(e.target).length === 0){
                close();
            };
        };

        const li = $(this).parents('.questions__item'),
              pElem = li.children('.questions__container-response'),
              text = pElem.children('.questions__response'),
              btn = $(this).children('.questions__item-btn-icon');

        pElem.slideToggle('slowe');
        text.toggleClass('questions__response_active1');

        if(!text.hasClass("questions__response_active1")){
            text.addClass('questions__response_active2');

            setTimeout(function(){
                text.removeClass('questions__response_active2');
            }, 300)
        }
    
        $(this).attr("aria-expanded" ,function(index, attr){
            if(attr == 'false'){
                btn.addClass('questions__item-btn-icon_rotate');
                return true;
            }else{
                btn.removeClass('questions__item-btn-icon_rotate');
                return false;
            }
        })
        
        activeSlide = li;
    });

    function close(){
        const li = activeSlide,
              pElem = li.children('.questions__container-response'),
              text = pElem.children('.questions__response'),
              btnIcon = li.find('.questions__item-btn-icon'),
              btn = li.find('.questions__btn-questions');

              console.log(btnIcon)

        pElem.hide('slowe');      
        text.removeClass('questions__response_active1');
        btn.attr("aria-expanded", "false");
        btnIcon.removeClass('questions__item-btn-icon_rotate');

        if(!text.hasClass("questions__response_active1")){
            text.addClass('questions__response_active2');

            setTimeout(function(){
                text.removeClass('questions__response_active2');
            }, 300)
        }
    };
    
});