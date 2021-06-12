
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <header>
            
    
     <nav>
         <ul>
             <li><a href="./index.html">Home</a></li>
             <li><a href="./site-map.html">Site Map</a></li>
             
         </ul>
     </nav>


         <div class="image-container">
             <img src="../images/header/mosaic.png"   alt="Mosaic ceiling">
         </div>

         <div class="image-container">
             <img src="../images/header/architecture.png" alt="Arch">
         </div>

         <div class="image-container">
             
             <img src="../images/header/calligraphy.png" alt="Caligraphy">
         </div>

         
         

   </header>
        
      `;
    }
  }

  customElements.define('header-component', Header);







