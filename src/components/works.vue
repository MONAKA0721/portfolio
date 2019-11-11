<template>
  <div id="test">
    <h1>Works</h1>
    <div id='works-wrapper'>

      <div class="works-box" id='memorip'>
        <div class="work-title"><a href="https://memorip.net/" target="_blank">Memorip</a></div>
        <p>現在開発中の旅行専用SNSです。旅行の企画を簡単にできたり、今までの旅行の足跡を残せたりできるようなwebサービスを作りたいと思っています</p>
        <div>Rails</div>
      </div>
      <a href="https://memorip.net/" target="_blank" id="memorip-link"><img id="memorip-image" src="../assets/memorip.png"></a>

      <div class="works-box" id="todo">
        <div class="work-title"><a href="http://taskforwantedly.herokuapp.com/" target="_blank">TODOアプリ</a></div>
        <p>サマーインターンの課題として作成したTODOアプリです。レスポンシブデザインに対応しています。</p>
        <div>React, TypeScript</div>
      </div>
      <a href="http://taskforwantedly.herokuapp.com/" target="_blank" id="todo-link"><img id="todo-image" src="../assets/todo_image.png"></a>

      <div class="works-box" id='renderer'>
        <div class="work-title"><a href="https://github.com/MONAKA0721/Renderer" target="_blank">RENDERER</a></div>
        <p>研究のためのデータセット作成用の 3D Renderer です。RGB image と Depth image を取得できます</p>
        <div>Python , OpenGL</div>
      </div>
      <a href="https://github.com/MONAKA0721/Renderer" target="_blank" id="renderer-link">
        <img id="renderer-image" src="../assets/renderer-image.png">
      </a>

      <div class="works-box" id="database">
        <div class="work-title"><a href="https://github.com/MONAKA0721/database" target="_blank">Database</a></div>
        <p>データベースの入出力を勉強するために作成しました。ブラウザ上でデータベースとのデータのやりとりができます。</p>
        <div>Java(Servlet) , PostgreSQL</div>
      </div>

      <div class="works-box" id='deeplearning'>
        <div class="work-title"><a href="https://github.com/MONAKA0721/DeepLearning" target="_blank">DeepLearning</a></div>
        <p>授業の一貫として作成したニューラルネットです。MNISTのデータセットの数字のクラス識別ができます。</p>
        <div>Python</div>
      </div>

    </div>
  </div>
</template>

<script>
</script>

<style>

.work-title > a {
  text-decoration: none;
  color: black;
}
.work-title{
  font-weight: 400;
  font-size: 3rem;
}
.works-box{
    margin:  0;
}
#works-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 270px 270px 270px 270px;
}
#memorip{
  grid-row: 1/2;
  grid-column: 1/2;
  padding: 0px 10px 0px 25vw;
}
#memorip-link{
  margin:9px auto 0 auto;
  width: 380px;
  height: 200px;
}
#memorip-image{
  grid-row: 1/2;
  grid-column: 2/3;
  border: solid 1px #ddbb99;
  border-radius: 8px;
  margin:9px auto 0 auto;
  width: 380px;
  height: 200px;
}
#todo{
  grid-row: 2/3;
  grid-column: 2/3;
  padding: 0px 25vw 0px 10px;
}
#todo-link{
  margin:9px auto 0 auto;
  width:380px;
  height:200px;
}
#todo-image{
  grid-row: 2/3;
  grid-column: 1/2;
  border: solid 1px #ddbb99;
  border-radius: 8px;
  margin:9px auto 0 auto;
  width:380px;
  height:200px;
}
#renderer{
  grid-row: 3/4;
  grid-column: 1/2;
  padding: 0px 10px 0px 25vw;
}
#renderer-link{
  margin:9px auto 0 auto;
  width:380px;
  height:200px;
}
#renderer-image{
  grid-row: 3/4;
  grid-column: 2/3;
  border: solid 1px #ddbb99;
  border-radius: 8px;
  margin:9px auto 0 auto;
  width:380px;
  height:200px;
}
#deeplearning{
  grid-row: 4/5;
  grid-column: 2/3;
  padding: 0px 12.5vw 0px 12.5vw;
}
#database{
  grid-row: 4/5;
  grid-column: 1/2;
  padding: 0px 12.5vw 0px 12.5vw;
}
/* #test{
  background-image: url("../lightVeneer.png");
} */
@media screen and (max-width:414px) {
  #works-wrapper{
    display: block;
  }
  #memorip{
    padding: 0px 10px 0px 10px;
  }
  #memorip-image{
    width: 340px;
  }
  #memorip-link{
    width: 340px;
  }
  #todo{
    padding: 0px 10px 0px 10px;
  }
  #todo-link{
    width:340px;
  }
  #todo-image{
    width:340px;
  }
  #renderer{
    padding: 0px 10px 0px 10px;
  }
  #renderer-link{
    width:340px;
  }
  #renderer-image{
    width:340px;
  }
}
</style>
