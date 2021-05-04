let header = document.getElementsByTagName("header")[0]
let imagesArray = ["calligraphy","architecture","miniature"]
let counter = 3;


function slideShow(){

    


    // counter++
        
        imagesArray.forEach((img,index) =>{

            setTimeout(() =>{

                header.style.backgroundImage = `url(images/${img}.jpg)`

                console.log(counter)
                console.log(imagesArray.length)

            }, index * 6000)
            
                
                
            })

         
            
      
    


   
}

setInterval(slideShow, counter * 1000)
