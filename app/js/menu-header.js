document.addEventListener('DOMContentLoaded', function(){ 
    const btnOpen = document.querySelector('#js-btn-open-menu'),
          btnClose = document.querySelector('#js-btn-close-menu'),
          menuBlock = document.querySelector('#js-menu-block'),
          body = document.querySelector('body');

    btnOpen.addEventListener('click', function(e){
        e.preventDefault();

        btnOpen.setAttribute('aria-expanded', "true");
        btnClose.setAttribute('aria-expanded', 'false');

        menuBlock.classList.add('header__active-menu');

        setTimeout(function(){
            menuBlock.style.cssText ='opacity: 1;';
        }, 100);
        body.classList.add('open-modal');
    });

    btnClose.addEventListener('click', function(){
        btnOpen.setAttribute('aria-expanded', 'false');
        btnClose.setAttribute('aria-expanded', 'true');

        menuBlock.style.cssText = 'opacity: 0;';
        setTimeout(function(){
            menuBlock.classList.remove('header__active-menu');
        }, 300);

        body.classList.remove('open-modal');
    });

    body.addEventListener('click', function(e){
        if(!e.target.closest('#js-menu-block') && e.target != btnOpen ) {
            btnOpen.setAttribute('aria-expanded', 'false');
            btnClose.setAttribute('aria-expanded', 'true');
    
            menuBlock.style.cssText = 'opacity: 0;';
            setTimeout(function(){
                menuBlock.classList.remove('header__active-menu');
            }, 300);
            body.classList.remove('open-modal');
        }else{
            return false;
        }
    })
});