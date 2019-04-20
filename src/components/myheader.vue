<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
          <div class="uk-navbar-center">

              <ul class="uk-navbar-nav">
                  <li class='uk-active'><router-link to="/">Top</router-link></li>
                  <li class='uk-active'><router-link to="/about">About</router-link></li>
                  <li class='uk-active'><router-link to="/works">Works</router-link></li>
                  <li class='uk-active'><router-link to="/languages">Languages</router-link></li>
                  <li class='uk-active'><router-link to="/skills">Skills</router-link></li>
              </ul>

          </div>
      </nav>
  </div>
</template>
