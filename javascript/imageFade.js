$(document).ready(() =>{
   


 $('.architecture').click(function(){

    let firstImageUrl = "../images/architecture/blue-mosque-aw.png"
    let secondImageUrl = "../images/architecture/sultan ahmet mosque.png"
   
    $(this).fadeOut(1000,function(){

       if($(this).attr("src") === firstImageUrl){
           $(this).attr("src",secondImageUrl)
           
           $(".dot.architecture-first").addClass("active")
           $(".dot.architecture-second").removeClass("active")
         
       }else{
           $(this).attr("src",firstImageUrl)
           
           $(".dot.architecture-second").addClass("active")
           $(".dot.architecture-first").removeClass("active")
       }
      
     })
     .fadeIn(2000)

    
    
 })


 $(".architecture-intro").click(function(){

    let firstImageUrl = "../images/architecture/The Dome of The Rock-inside.png"
    let secondImageUrl = "../images/architecture/The Dome of The Rock.png"

    $(this).fadeOut(1000,function(){
        
        if($(this).attr("src") === secondImageUrl){
            $(this).attr("src",firstImageUrl)
            
            $(".dot.intro-second").addClass("active")
            $(".dot.intro-first").removeClass("active")
         
        }else{
            $(this).attr("src",secondImageUrl)
            
            $(".dot.intro-second").removeClass("active")
            $(".dot.intro-first").addClass("active")

        }


    })
    .fadeIn(2000)

 })


 $('.minaret').click(function(){

    let firstImageUrl = "../images/architecture/minaret_2.png"
    let secondImageUrl = "../images/architecture/minaret.png";
   $(this).fadeOut(1000,function(){

    if($(this).attr("src") === firstImageUrl){
        $(this).attr("src",secondImageUrl)
        
        $(".dot.minaret-first").addClass("active")
        $(".dot.minaret-second").removeClass("active")
      
    }else{
        $(this).attr("src",firstImageUrl)
        
        $(".dot.minaret-first").removeClass("active")
        $(".dot.minaret-second").addClass("active")
    }
      
     })
     .fadeIn(2000)

    
    
 })


 $(".dome").click(function(){

    let firstImageUrl = "../images/architecture/domes architecture.png"
    let secondImageUrl = "../images/architecture/Jāmeh Mosque of Isfahān.png"

    $(this).fadeOut(1000,function(){

      

        if($(this).attr("src") === secondImageUrl){
            $(this).attr("src",firstImageUrl)
            
            $(".dot.dome-second").addClass("active")
            $(".dot.dome-first").removeClass("active")
        }else{
            $(this).attr("src",secondImageUrl)
            
            $(".dot.dome-second").removeClass("active")
            $(".dot.dome-first").addClass("active")
        }
    })
    .fadeIn(2000)
    
})



$(".muqarnas-vaulting").click(function(){

    let firstImageUrl = "../images/architecture/muqarnas vaulting_2.png"
    let secondImageUrl = "../images/architecture/muqarnas vaulting_1.png"

    $(this).fadeOut(1000,function(){

        if($(this).attr("src") === secondImageUrl){
            $(this).attr("src",firstImageUrl)
            
            $(".dot.vaulting-second").addClass("active")
            $(".dot.vaulting-first").removeClass("active")
        }else{
            $(this).attr("src",secondImageUrl)
            
            $(".dot.vaulting-second").removeClass("active")
            $(".dot.vaulting-first").addClass("active")
        }
    })
    .fadeIn(2000)
    
})

    
$(".arches").click(function(){

    let firstImageUrl = "../images/architecture/arches_2.png"
    let secondImageUrl = "../images/architecture/arches_1.png"

    $(this).fadeOut(1000,function(){

        if($(this).attr("src") === secondImageUrl){
            $(this).attr("src",firstImageUrl)
            
            $(".dot.arches-second").addClass("active")
            $(".dot.arches-first").removeClass("active")
        }else{
            $(this).attr("src",secondImageUrl)
            
            $(".dot.arches-second").removeClass("active")
            $(".dot.arches-first").addClass("active")
        }
    })
    .fadeIn(2000)
    
})

$(".decoration").click(function(){

    let firstImageUrl = "../images/architecture/Sultan Ahmet mosque-inside.png"
    let secondImageUrl = "../images/architecture/decoration.png"

    $(this).fadeOut(1000,function(){

        if($(this).attr("src") === secondImageUrl){
            $(this).attr("src",firstImageUrl)
            
            $(".dot.decoration-second").addClass("active")
            $(".dot.decoration-first").removeClass("active")
        }else{
            $(this).attr("src",secondImageUrl)
            
            $(".dot.decoration-second").removeClass("active")
            $(".dot.decoration-first").addClass("active")
        }
    })
    .fadeIn(2000)
    
})
})