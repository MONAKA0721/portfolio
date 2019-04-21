<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from './components/myheader'
export default {
  name: 'App',
  components: { myheader }
}
</script>

<style>

html{
    font-size: 62.5%;
}
body{
    font-size:1.6rem;/* 16px*/
    line-height: 2;
}
h1 {
    font-size: 36px;/* IE8以下とAndroid4.3以下用フォールバック */
    font-size: calc(1.5rem + ((1vw - 4.8px) * 10.5556)); /*36-100px*/
    line-height: 1.3;
}
h2 {
    font-size: 24px;/* IE8以下とAndroid4.3以下用フォールバック */
    font-size: calc(1.35rem + ((1vw - 4.8px) * 5.3333));
    line-height: 1.3;
}
@media (min-width: 1200px) {/* 1200px以上*/
    h1 {
      font-size: 10rem;/* 36px*/
    }
    h2 {
        font-size: 6rem;
    }

    #mainTitle{
      margin: 60px;
      margin-bottom: 0px;
    }
    #name{
      margin-top: 0px;
      margin-right: 0px;
    }
    #self-introduction{
      margin: 60px;
    }
}
@media screen and (max-width: 640px) {/* 640px以下*/
    body{
    line-height: 2;
    }
    h1{
        font-size: 3rem;/* 24px*/
    }
    h2 {
        font-size: 2rem;/* 20px*/
    }
    #mainTitle{
      margin: 0px;
    }
    #self-introduction{
      margin: 0px;
    }
}
@@media screen and (max-width:340px) {
    li{
        font-size: 1em;
    }
}

#mainTitle{
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo{
  animation-delay: 2s;
}

</style>
