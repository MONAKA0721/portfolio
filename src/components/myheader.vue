<template>
  <div>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
      id="header">
      <nav class="uk-navbar-container scroll-nav" uk-navbar style="position: relative; z-index: 980;">

          <div class="uk-navbar-center" >
            <div class="scroll-nav__view">
              <ul class="uk-navbar-nav">
                  <li class='uk-active'><router-link to="/">Top</router-link></li>
                  <li class='uk-active'><router-link to="/about">About</router-link></li>
                  <li class='uk-active'><router-link to="/works">Works</router-link></li>
                  <li class='uk-active'><router-link to="/languages">Languages</router-link></li>
                  <li class='uk-active'><router-link to="/skills">Skills</router-link></li>
              </ul>
            </div>
          </div>
      </nav>
  </div>

  <nav class="scroll-nav">
   <div class="scroll-nav__view">
      <ul class="scroll-nav__list">
        <li class="scroll-nav__item"><a href="#">First Item</a></li>
        <li class="scroll-nav__item"><a href="#">世界のナベアツ</a></li>
        <li class="scroll-nav__item"><a href="#">日本のナベアツ</a></li>
        <li class="scroll-nav__item"><a href="#">北関東のナベアツ</a></li>
        <li class="scroll-nav__item"><a href="#">One</a></li>
        <li class="scroll-nav__item"><a href="#">Two</a></li>
        <li class="scroll-nav__item"><a href="#">Three</a></li>
        <li class="scroll-nav__item"><a href="#">Four</a></li>
        <li class="scroll-nav__item"><a href="#">Five</a></li>
        <li class="scroll-nav__item"><a href="#">Six</a></li>
        <li class="scroll-nav__item"><a href="#">Seven</a></li>
        <li class="scroll-nav__item"><a href="#">Eight</a></li>
        <li class="scroll-nav__item"><a href="#">Nine</a></li>
        <li class="scroll-nav__item"><a href="#">Ten</a></li>
        <li class="scroll-nav__item"><a href="#">Last Item</a></li>
      </ul>
    </div>
</nav>

  <!-- <div>
    <div id="toggle">
      <nav class="uk-navbar uk-navbar-container uk-margin">
          <div class="uk-navbar-left">
            <a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-nav-primary"></a>
          </div>
      </nav>

      <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li class='uk-active'><router-link to="/">Top</router-link></li>
          <li class='uk-active'><router-link to="/about">About</router-link></li>
          <li class='uk-active'><router-link to="/works">Works</router-link></li>
          <li class='uk-active'><router-link to="/languages">Languages</router-link></li>
          <li class='uk-active'><router-link to="/skills">Skills</router-link></li>
        </ul>

      </div>
    </div>
    </div>
  </div> -->
</div>
</template>
