const menu = document.getElementById('menu');

if (menu) {
    menu.innerHTML = DOMPurify.sanitize(`
         <header class="header-wrap header_1">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-12 d-flex justify-content-between align-items-center"
          >
            <div class="top_head_left d-none d-xl-block">
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <a href="#">Av. de la Constitución 34, Beiro</a>
                </li>
                <li>
                  <i class="far fa-clock"></i
                  ><a href="#">Lun – Vie: 9.00 – 14.00</a>
                </li>
              </ul>
            </div>

            <div class="logo_widget d-none d-xl-block">
              <div class="logo_1">
                <a href="index.html">
                  <img src="./assets/img/home_01/logo_main.png" alt="logo" />
                </a>
              </div>
            </div>

            <div class="top_head_right d-none d-xl-block">
              <ul>
                <li>
                  <i class="fas fa-calendar-alt"></i> Consulta Gratis?
                  <a href="contacto.html">Realice una cita</a>
                  <i class="fas fa-long-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main_menu_widget">
          <div class="row align-items-center px-3">
            <div
              class="col-12 d-flex justify-content-between align-items-center"
            >
              <div class="logo d-block d-xl-none">
                <a href="#">
                  <img src="./assets/img/home_02/logo.png" alt="logo" />
                </a>
              </div>
              <div class="main-menu">
                <ul>
                  <li>
                    <a href="index.html">Inicio</a>
                  </li>
                  <li><a href="nosotros.html">Nosotros</a></li>
                  <li>
                    <a href="servicios.html">Servicios</a>
                  </li>
                  <li>
                    <a href="blog.html">Prensa</a>
                  </li>
                  <li>
                    <a href="https://private.tucomunidad.com/#/login">Area Privada</a>
                  </li>
                </ul>
              </div>

              <div class="main-menu_2 d-flex align-items-center">
                <ul>
                  <li>
                    <a href="contacto.html">Contacto </a>
                  </li>
                  <li class="contain-banderas">
                    <a href="index.html">ES <img class="icon-bandera" src="/assets/img/icon_es.png" alt="idioma español"> </a>
                    <a href="index.html">EN <img class="icon-bandera" src="/assets/img/icon_en.png" alt="idioma inglés"></a>
                  </li>
                </ul>

                <a href="tel:+34958283829" class="right_button">
                  <div class="right_icon">
                    <i class="icon-phone"></i>
                  </div>
                  <div class="content_top">
                    <p>Contáctenos</p>
                    <h5>958 283 829</h5>
                  </div>
                </a>
              </div>

              <div class="mobile-nav-bar d-block d-lg-none">
                <div class="mobile-nav-wrap">
                  <div id="hamburger">
                    <i class="fal fa-bars"></i>
                  </div>
                  <!-- mobile menu - responsive menu  -->
                  <div class="mobile-nav">
                    <button type="button" class="close-nav">
                      <i class="fal fa-times-circle"></i>
                    </button>
                    <nav class="sidebar-nav">
                      <ul class="metismenu" id="mobile-menu">
                        <li>
                          <a href="index.html">Inicio</a>
                        </li>
                        <li><a href="nosotros.html">Nosotros</a></li>
                        <li>
                          <a href="servicios.html">Servicios</a>
                        </li>
                        <li>
                          <a href="blog.html">Prensa</a>
                        </li>
                        <li>
                          <a href="https://private.tucomunidad.com/#/login">Area Privada</a>
                        </li>
                      </ul>
                    </nav>

                    <div class="action-bar">
                      <a href="tel:+34958283829" class="right_button">
                        <div class="right_icon">
                          <i class="icon-phone"></i>
                        </div>
                        <div class="content_top">
                          <p>Contáctenos</p>
                          <h5>958 283 829</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        `);
}