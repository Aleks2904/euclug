document.addEventListener("DOMContentLoaded", function(event) { 
    function slider(slide){
        const returnShablon = `
            <li class="swiper-slide presentation__slide">
                <picture>
                    <source type="image/webp" srcset="${slide.webp}">
                    <img src="${slide.jpg}" alt="${slide.alt}" class="presentation__img">
                </picture>
            </li>
        `

        return returnShablon;
    }
    
    const templates = presentContent.map( presentContent => slider(presentContent));
    const html = templates.join( ' ' );
    
    document.querySelector('#js-presentation-track').innerHTML = html;
})