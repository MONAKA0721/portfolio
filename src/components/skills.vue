<template>
  <div class="test">
    <h1>Skills</h1>
    <div id="skills-box">
      <ul>
        <li>Python</li>
        <li>Ruby</li>
        <li>Golang</li>
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript (ES6)</li>
        <li>Vue.js/React.js</li>
        <li>Git</li>
        <li>Docker</li>
        <li>AWS S3</li>
        <li>Firebase</li>
        <li>Cloud SQL</li>
        <li>GKE</li>
        <li>OpenGL</li>
        <li>Blender</li>
        <li><a href="https://www.slideshare.net/secret/upZ841uIHPje3k" id="computer-vision-link" target="_blank">Computer Vision</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
#computer-vision-link{
  text-decoration: none;
}
#computer-vision-link:link{
  color: #bc763c;
}
#computer-vision-link:visited{
  color: #bc763c;
}
ul{
  display: grid;
  grid-template-columns: repeat(3,calc(100% / 3));
}
li{
  text-align: left;
  font-size: 1.5vw;
}
#skills-box{
  display: block;
  width:55%;
  margin:0 auto;
}
/* .test{
  background-image: url("../lightVeneer.png");
} */
@media screen and (max-width:414px) {
  #skills-box{
    width:100%;
  }
  li{
    font-size: 10px;
  }
}
</style>
