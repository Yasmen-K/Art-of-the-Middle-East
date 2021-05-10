
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
            
      <audio src="../sources/background-music.mp4" autoplay controls></audio> 
     <nav>
         <ul>
             <li><a href="./index.html">Home</a></li>
             <li><a href="./calligraphy.html">Calligraphy</a></li>
             <li><a href="./ebru.html">Ebru</a></li>
             <li><a href="./miniature.html">Miniature</a></li>
             <li><a href="./tiling.html">Tiling</a></li>
             <li><a href="./contacts.html">Contacts</a></li>
         </ul>
     </nav>

      

         <div class="image-container">
             <img src="../images/mosaic.png" alt="Mosaic ceiling">
         </div>

         <div class="image-container">
             <img src="../images/architecture.png" alt="Arch">
         </div>

         <div class="image-container">
             
             <img src="../images/calligraphy.png" alt="Caligraphy">
         </div>
         
         

   </header>
        
      `;
    }
  }

  customElements.define('header-component', Header);







