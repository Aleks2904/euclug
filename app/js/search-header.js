document.addEventListener('DOMContentLoaded', function(){
    const btnSearch = document.querySelector('#js-btn-search'),
          inputSeacrh = document.querySelector('#js-input-search');

    btnSearch.addEventListener('click', function(e){
        const valueIS = inputSeacrh.value;

        if(valueIS == ""){
            e.preventDefault();
        }
    })
});