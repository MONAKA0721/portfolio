<template>
  <div>
    <h1>Skills</h1>
    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-body">コンピュータビジョン</div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">UI作成</div>
      </div>
    </div>
    <div class="gnav">
<ul>
<li><a href="#">menu1</a></li>
<li><a href="#">menu2</a></li>
<li><a href="#">menu3</a></li>
<li><a href="#">menu4</a></li>
<li><a href="#">menu5</a></li>
<li><a href="#">menu6</a></li>
<li><a href="#">menu7</a></li>
<li><a href="#">menu8</a></li>
</ul>
</div>

<!-- <div class="sumaho">

<h1>横スクロールしてみ？</h1>

<div class="slide-wrap">

<div class="side-box">
  <div class="inner">
    <img src="http://satyr.io/480x4:3" alt="">
    <p>テキスト</p>
  </div>
</div>

<div class="side-box">
  <div class="inner">
    <img src="http://satyr.io/480x4:3" alt="">
    <p>テキスト</p>
  </div>
</div>

<div class="side-box">
  <div class="inner">
    <img src="http://satyr.io/480x4:3" alt="">
    <p>テキスト</p>
  </div>
</div>

<div class="side-box">
  <div class="inner">
    <img src="http://satyr.io/480x4:3" alt="">
    <p>テキスト</p>
  </div>
</div>
</div>

</div> -->

  </div>
</template>

<script>
</script>

<style>
.gnav {
  width: 100%;
  height: 40px;
  background: #9fb7d4;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.gnav ul {
  width: 800px;
  height: 40px;
  margin: 0 auto 2px auto;
  list-style: none;
  display: flex;
}
.gnav ul li {
  text-align: center;
  border-left: 1px solid #eee;
}
.gnav ul li:last-child {
  border-right: 1px solid #eee;
}
.gnav ul li a,
.gnav ul li a:link,
.gnav ul li a:visited {
  display: inline-block;
  width: 96px;
  height: 40px;
  background: #9fb7d4;
  color: #fff;
  text-decoration: none;
}
.gnav ul li a:hover,
.gnav ul li a:active {
  background: #afc6e2;
}
/* .slide-wrap {
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 0 auto;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

.side-box {
  flex: 0 0 88%;
  padding: 0 8px;

  .inner {
    background: #fff;

    img {
      max-width: 100%;
      height: auto;
    }

    p {
      padding: 8px;
    }
  }
}

html {
    height: 100%;
}

body {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.sumaho {
  max-width: 320px;
  min-height: 600px;
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 24px;
  }
} */
</style>
