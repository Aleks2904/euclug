document.addEventListener("DOMContentLoaded", function(event) { 
    const stepBtn = document.querySelectorAll('.working__step-btn'),
          stepItem = document.querySelectorAll('.working__info-item'),
          progressBar = document.querySelector('#js-progress');

    stepBtn.forEach(function(el){
        el.addEventListener('click', function(e){
            e.preventDefault();

            const href = e.target.getAttribute('name'),
                  step = document.querySelector(href),
                  val = e.target.getAttribute('value');

            stepItem.forEach(function (el){
                el.classList.remove('working__info-item_active', 'working__info-item_active-opacity');
            })
            stepBtn.forEach(function(el){
                el.classList.remove('working__step-btn_active');
            });

            e.target.classList.add('working__step-btn_active');
            step.classList.add('working__info-item_active');
            setTimeout(function(){
                step.classList.add('working__info-item_active-opacity');
            }, 100);
            progressBar.value = val;

        })
     })
});