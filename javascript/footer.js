class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
      <footer>
            
            <ul>
                <li><a href="#"><img src="../images/facebook.png" alt=""></a></li>
                <li><a href="#"><img src="../images/instagram.png" alt=""></a></li>
                <li><a href="#"><img src="../images/twitter.png" alt=""></a></li>
            </ul>
       </footer> 
        
      `;
    }
  }

  customElements.define('footer-component', Footer);


