<template>
  <div>
    <h1>Languages</h1>

    <!-- 学習のためこのページはCSSグリッドを使用して作成しています -->

    <div id='container'>
    <div class='box'>
        <div><h3>Java</h3>
        <p>一番はじめに学習した言語です。webページの作成が行えます。</p>
        </div>
    </div>
    <div class="box"><h3>C++</h3>
        <p>競技プログラミングをやる際に学習しました。文法と一部ライブラリが使用できる程度です。</p>
    </div>
    <div class="box">
        <h3>Rails</h3>
        <p>目下学習中です。Railsチュートリアルを一周終えて、二周目をしながらwebサービスを作っています。</p>
    </div>
    <div class="box">
        <h3>Python</h3>
        <p>DeepLearningを組む際に使用しました。ニューラルネット内部の計算はある程度理解しています。</p>
    </div>
    <div class="box">
        <h3>HTML&CSS</h3>
        <p>複数のwebサイトを作る際に使用しています。CSSグリッドを使えます。</p>
    </div>

    <!-- <div class="uk-child-width-expand@s uk-text-center" uk-grid style="position:inherit">
    <div>
        <div class="uk-card uk-card-default uk-card-body"><h3>Java</h3>
        <p>一番はじめに学習した言語です。webページの作成が行えます。</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><h3>C++</h3>
        <p>競技プログラミングをやる際に学習しました。文法と一部ライブラリが使用できる程度です。</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><h3>Rails</h3>
        <p>目下学習中です。Railsチュートリアルを一周終えて、二周目をしながらwebサービスを作っています。</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><h3>Python</h3>
        <p>DeepLearningを組む際に使用しました。ニューラルネット内部の計算はある程度理解しています。</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">HTML&CSS</div>
    </div> -->
</div>
  </div>
</template>

<script>
</script>

<style>

#container{
  display: grid;
  grid-gap: 2% 2%;
  margin: 2%;
}

.box{
    padding: 0.5em 1em;
    margin:  0;
    background: white;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
}

@media screen and (min-width:640px) {
  #container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr 3fr;
  }
}
</style>
