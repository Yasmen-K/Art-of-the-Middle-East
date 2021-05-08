
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
            
      <audio src="../images/tesher-jalebi-baby.mp3" autoplay controls></audio> 
     <nav>
         <ul>
             <li><a href="./index.html">Home</a></li>
             <li><a href="./calligraphy.html">Calligraphy</a></li>
             <li><a href="./ebru.html">Ebru</a></li>
             <li><a href="./miniature.html">Miniature</a></li>
             <li><a href="">Tiling</a></li>
             <li><a href="./contacts.html">Contacts</a></li>
         </ul>
     </nav>

      

         <div class="image-container">
             <img src="../images/mosaic_2.png" alt="">
         </div>

         <div class="image-container">
             <img src="../images/architecture.png" alt="">
         </div>

         <div class="image-container">
             
             <img src="../images/calligraphy.png">
         </div>
         
         

   </header>
        
      `;
    }
  }

  customElements.define('header-component', Header);







