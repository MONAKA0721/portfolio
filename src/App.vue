<template>
  <div id="app">
    <myheader style="position:sticky; top:0;"></myheader>
    <transition mode="out-in">
      <router-view/>
    </transition>
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
    margin: 0px;
    background-image: url("~@/assets/lightVeneer.png")
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
p{
  font-size:1.6rem;
  font-size: calc(1rem + ((1vw - 6.4px) * 1.0714));
}
@media screen and (min-width: 1200px) {/* 1200px以上*/
    h1 {
      font-size: 5rem;/* 36px*/
      font-weight: lighter;
    }
    h2 {
        font-size: 6rem;
    }
    p{
      font-size: 16px;
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
      margin-top: 0px;
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
    p{
        font-size:1rem;
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
      overflow-x: auto;
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

@media screen and (min-width:340px) {
}

.uk-grid{
  margin: 0px;
  padding-right: 30px;
}

.uk-card{
  position: inherit !important;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#logo{
  animation-delay: 2s;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

#usedLanguage{
  padding-right: 20px;
}
</style>
