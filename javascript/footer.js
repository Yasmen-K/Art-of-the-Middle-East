class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
      <footer>
            
            <ul>
                <li><a href="#"><img src="../images/footer/facebook.png" alt=""></a></li>
                <li><a href="#"><img src="../images/footer/instagram.png" alt=""></a></li>
                <li><a href="#"><img src="../images/footer/twitter.png" alt=""></a></li>
            </ul>
       </footer> 
        
      `;
    }
  }

  customElements.define('footer-component', Footer);


