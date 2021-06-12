$(document).ready(function(){
    
    
    
    $('.sun').on('webkitAnimationEnd', function(){
        
    
        let bodyClass = $("body").attr('class')
    
    
        if(bodyClass === 'day'){
            
            $("body").removeClass('day')
            $("body").addClass('night')
    
            
            $(".animation-container").removeClass("sun")
            $(".animation-container").addClass("moon")
            
            
        }else{
            $("body").removeClass('night')
            $("body").addClass('day')
    
            $(".animation-container").removeClass("moon")
            $(".animation-container").addClass("sun")
        }
        
      
    });



})

