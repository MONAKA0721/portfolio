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
@media screen and (min-width: 1200px) {/* 1200px以上*/
    h1 {
      font-size: 10rem;/* 36px*/
    }
    h2 {
        font-size: 6rem;
    }
    .uk-navbar-nav>li>a{
      font-size: 2rem;
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
@media screen and (max-width:339px) {
    li{
        /* display: table-cell; */
    }
    .uk-navbar-nav li a{
      min-height: 48px;
    }

    #toggle{
    }
    .scroll-nav {
      /* スクロールバーを見えなくするため */
      height: 48px; /* 実際に表示する高さ */
      overflow-y: hidden;
    }

    /* 中身がスクロールするビュー */
    .scroll-nav__view {
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
    }

    /* 実際にスクロールするオブジェクト */
    .scroll-nav__list {
      /* tableにすることで、横幅指定をすることなくmargin: autoによる中央寄せが可能になる */
      display: table;
      list-style: none;
      margin: 0 auto;
      /* 下方向に余分なpadding部分を持たせ、そこにスクロールバーが表示される */
      padding: 0 0 24px 0;
    }

    .scroll-nav__item {
      /* itemを横並びに、かつ親要素がその親要素の横幅からはみだすことが可能になる */
      display: table-cell;
    }

    .scroll-nav a {
      display: block;
      padding: 12px;
      /* 文字列の自動改行を禁止 */
      white-space: nowrap;
    }

    /* 以下サンプル用デザイン */

    .scroll-nav {
      background: rgb(50, 50, 50);
    }

    .scroll-nav a {
      color: rgb(224, 224, 224);
      font-family: sans-serif;
      font-size: 14px;
      /* 行高が24pxになるように調整 24/14 */
      line-height: 1.71428;
      text-decoration: none;
    }
}

@media screen and (min-width:340px) {
    #toggle{
      display: none;
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
