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
