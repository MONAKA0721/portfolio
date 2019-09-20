<template>
  <div id="test">
    <h1>Experiences</h1>
    <div id='experiences-wrapper'>

      <div class="experiences-box" id='hakarusu'>
        <div class="experience-time">2019/10〜</div>
        <div class="experience-title">株式会社ハカルス 長期インターン参画</div>
        <p>機械学習を用いた画像解析に関する開発や、それらを Web アプリに落とし込むプロジェクトに参加させてもらう予定です。</p>
      </div>
      <div class="circle" style="grid-row: 1/2;"></div>

      <div class="left-box">
      </div>
      <div class="experiences-box" id="optim">
        <div class="experience-time">2019/09</div>
        <div class="experience-title">株式会社オプティム 就業型インターン</div>
        <p></p>
      </div>
      <div class="circle" style="grid-row: 2/3;"></div>

      <div class="experiences-box" id='nikkei'>
        <div class="experience-time">2019/09</div>
        <div class="experience-title">日経新聞デジタル HACK THE NIKKEI</div>
        <p>電子短期インターン福岡会場に参加しました。日経電子版の記事データや閲覧履歴をデータ処理し、Web版における新たなサービスを提案し、実装しました。</p>
      </div>
      <div class="circle" style="grid-row: 3/4;"></div>

    </div>
  </div>
</template>

<script>
</script>

<style>

.experience-time{
  font-weight: 400;
  font-size: 2rem;
}
.experience-title{
  font-weight: 400;
  font-size: 2.5rem;
}
.experiences-box{
    margin:  0;
}
.circle{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #b98c46;/*背景色*/
  grid-column: 2;
  margin: auto 0px auto 0px;
  transform: translateX(-50%)
}
.experiences-box > p {
  font-size: 13px;
}
.left-box{
  grid-row: 2/3;
  grid-column: 1/2;
  border-right: solid 1px darkgray;
}
#experiences-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
}
#hakarusu{
  grid-row: 1/2;
  grid-column: 1/2;
  padding: 0px 30px 0px 15vw;
  border-right: solid 1px darkgray;
}
#optim{
  grid-row: 2/3;
  grid-column: 2/3;
  padding: 0px 15vw 0px 30px;
}
#nikkei{
  grid-row: 3/4;
  grid-column: 1/2;
  padding: 0px 30px 0px 15vw;
  border-right: solid 1px darkgray;
}
/* #test{
  background-image: url("../lightVeneer.png");
} */
</style>
