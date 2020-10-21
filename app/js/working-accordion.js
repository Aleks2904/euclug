document.addEventListener("DOMContentLoaded", function(event) { 
    const stepBtn = document.querySelector('#js-step-btn'),
          stepList = document.querySelector('#js-step-list'),
          progressBar = document.querySelector('#js-progress');

    stepBtn.addEventListener('click', function(e){
        if(e.target.tagName == 'A'){
            e.preventDefault();

            const href = e.target.getAttribute('href'),
                  step = document.querySelector(href),
                  btnItem = stepBtn.children,
                  stepItem = stepList.children,
                  val = e.target.getAttribute('value');

            for( let i = 0 ; i < stepItem.length; i++){
                stepItem[i].classList.remove('working__info-item_active', 'working__info-item_active-opacity');
            }
            for( let i = 0; i < btnItem.length; i++){
                for( let k = 0; k < btnItem[i].children.length; k++){
                    const link = btnItem[i].children[k]
                    link.classList.remove('working__step-link_active');
                }
            }

            e.target.classList.add('working__step-link_active');
            step.classList.add('working__info-item_active');
            setTimeout(function(){
                step.classList.add('working__info-item_active-opacity');
            }, 100);
            progressBar.value = val;
        }
    })
});