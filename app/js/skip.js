document.addEventListener('DOMContentLoaded', function(){
    const linkSkip = document.querySelector('#js-skip');
    const body = document.querySelector('body');

    linkSkip.addEventListener('click', function(e){
        if(linkSkip  === document.activeElement){
            return true;
        }else{
            if (e.button==0) {
                e.preventDefault();
                linkSkip.blur();
            }   
        }
    })

});