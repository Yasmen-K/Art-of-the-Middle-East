function createFooter(){



    let footerElement = document.createElement('footer')
    let footerUl = document.createElement('ul')
    let liInstagram = document.createElement('li')
    let aInstagram = document.createElement('a')
    let imgInstagram = document.createElement('img')
    
    imgInstagram.src = "../images/instagram.png"
    aInstagram.appendChild(imgInstagram)
    liInstagram.appendChild(aInstagram)
    footerUl.appendChild(liInstagram)
    footerElement.appendChild(footerUl)
    document.body.appendChild(footerElement)

}

createFooter()


