<template>
  <div id="test">
    <h1>Experiences</h1>
    <div id='experiences-wrapper'>

      <div class="experiences-box left-box" id='cookpad'>
        <div class="experience-time">2020/04</div>
        <div class="experience-title">株式会社クックパッド スプリングインターン</div>
        <p>Ruby on Rails を用いたパフォーマンス・チューニングのプログラムに参加しました</p>
      </div>
      <div class="circle" style="grid-row: 1/2;"></div>

      <div class="left-box">
      </div>
      <div class="experiences-box right-box" id='hakarusu'>
        <div class="experience-time">2019/10〜</div>
        <div class="experience-title">株式会社ハカルス 長期インターン参画</div>
        <p>機械学習を用いた画像解析に関する開発や、それらを Web アプリに落とし込むプロジェクトに参加させてもらっています。</p>
      </div>
      <div class="circle" style="grid-row: 2/3;"></div>

      <div class="experiences-box left-box" id="optim">
        <div class="experience-time">2019/09</div>
        <div class="experience-title">株式会社オプティム 就業型インターン</div>
        <p>セマンティック・セグメンテーションを用い、社内で取り組んでいるプロジェクトの精度向上に関する研究を行いました</p>
      </div>
      <div class="circle" style="grid-row: 3/4;"></div>

      <div class="left-box">
      </div>
      <div class="experiences-box right-box" id='nikkei'>
        <div class="experience-time">2019/09</div>
        <div class="experience-title">日経新聞デジタル HACK THE NIKKEI</div>
        <p>日経電子版短期インターン福岡会場に参加しました。日経電子版の記事データや閲覧履歴をデータ処理し、Web版における新たなサービスを提案し、実装しました。</p>
      </div>
      <div class="circle" style="grid-row: 4/5;"></div>

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
  background: #b98c46;
  grid-column: 2;
  margin: auto 0px auto 0px;
  transform: translateX(-50%)
}
.experiences-box > p {
  font-size: 13px;
}
.left-box{
  border-right: solid 1px darkgray;
  padding: 0px 30px 0px 15vw;
}
.right-box{
  padding: 0px 15vw 0px 30px;
}
#experiences-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;
}
#cookpad{
  grid-row: 1/2;
  grid-column: 1/2;
  border-right: solid 1px darkgray;
}
#hakarusu{
  grid-row: 2/3;
  grid-column: 2/3;
}
#optim{
  grid-row: 3/4;
  grid-column: 1/2;
  border-right: solid 1px darkgray;
}
#nikkei{
  grid-row: 4/5;
  grid-column: 2/3;
}
@media screen and (max-width:414px) {
  .experience-title{
    font-weight: 400;
    font-size: 16px;
  }
  .circle{
    width: 16px;
    height: 16px;
  }
  #experiences-wrapper{
    display: block;
    margin-left: 15px;
    border-left: solid 1px darkgray;
  }
  #hakarusu{
    padding: 0px 10px 0px 10px;
  }
  #optim{
    padding: 0px 10px 0px 10px;
  }
  #nikkei{
    padding: 0px 10px 0px 10px;
  }
}
</style>
