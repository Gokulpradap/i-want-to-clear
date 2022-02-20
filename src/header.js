import React from "react";

function Header() {
  return (
   
    <header class="masthead text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <img
          class="masthead-avatar mb-5"
          src="https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/259441354_2480059558796564_4629712032011505592_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yNQ_jQzcMaoAX_oSXe4&_nc_ht=scontent.fixm4-1.fna&oh=00_AT8EsxWkD2GNmVif8rtA4-D5pqcTOsiJilLcJ7j_GpuQag&oe=62167543"
          alt="..."
        />

        <div class="divider-custom divider-dark">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <p class="masthead-subheading font-weight-light mb-0">
          Front End Developer
        </p>
      </div>
    </header>
    
  );
}
export default Header;
