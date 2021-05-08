let slideIndex = 0;


function slideImages(){
    
    let i;
    let carouselContainer = document.getElementsByClassName('image-container')
    
    for (let i = 0; i < carouselContainer.length; i++) {
        carouselContainer[i].style.display = 'none'
        
    }
    slideIndex++
    
    if(slideIndex > carouselContainer.length){
        slideIndex = 1;
    }
    
    carouselContainer[slideIndex - 1].style.display = 'block'
    setTimeout(slideImages,3000)
    
}

slideImages()

