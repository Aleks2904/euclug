$( document ).ready(function(){
    const btn = $('.questions__item-btn'),
          titel = $('.questions__title-questions'),
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
              btn = $(this);

        pElem.slideToggle('slowe');
        text.toggleClass('questions__response_active1');
    
        btn.attr("aria-expanded" ,function(index, attr){
            if(attr == 'false'){
                btn.addClass('questions__item-btn_rotate');
                return true;
            }else{
                btn.removeClass('questions__item-btn_rotate');
                return false;
            }
        })
        
        activeSlide = li;
    });

    titel.on('click', function(e){
        if(activeSlide != undefined){
            if(activeSlide.has(e.target).length === 0){
                close();
            };
        };

        const li = $(this).parents('.questions__item'),
              pElem = li.children('.questions__container-response'),
              text = pElem.children('.questions__response'),
              btn = li.find('.questions__item-btn');

        pElem.slideToggle('slowe');
        text.toggleClass('questions__response_active1');
    
        btn.attr("aria-expanded" ,function(index, attr){
            if(attr == 'false'){
                btn.addClass('questions__item-btn_rotate');
                return true;
            }else{
                btn.removeClass('questions__item-btn_rotate');
                return false;
            }
        })
        
        activeSlide = li;
    });

    function close(){
        const li = activeSlide,
              pElem = li.children('.questions__container-response'),
              text = pElem.children('.questions__response'),
              btn = li.find('.questions__item-btn');

        pElem.hide('slowe');      
        text.removeClass('questions__response_active1');
        btn.attr("aria-expanded", "false");
        btn.removeClass('questions__item-btn_rotate');
    };
    
});