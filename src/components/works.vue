<template>
  <div>
    <h1>Works</h1>
    <div id='works-wrapper'>

      <div class="works-box" id='tristagram'>
        <h3><a href="https://tristagram.herokuapp.com/" target="_blank">Tristagram</a></h3>
        <p>現在開発中の旅行専用SNSです。旅行の企画を簡単にできたり、今までの旅行の足跡を残せたりできるようなwebサービスを作りたいと思っています</p>
        <tr>
          <th id="usedLanguage">使用言語 </th>
          <td>Rails , HTML , CSS</td>
        </tr>
      </div>

      <img id="tristagram-image" src="../assets/tristagram.png" width="380" height="200">

      <div class="works-box" id='deeplearning'>
        <h3><a href="https://github.com/MONAKA0721/DeepLearning" target="_blank">DeepLearning</a></h3>
        <p>授業の一貫として作成したニューラルネットです。MNISTのデータセットの数字のクラス識別ができます。</p>
        <tr>
          <th id="usedLanguage">使用言語 </th>
          <td>Python</td>
        </tr>
      </div>

      <div class="works-box" id="database">
        <h3><a href="https://github.com/MONAKA0721/database" target="_blank">Database</a></h3>
        <p>データベースの入出力を勉強するために作成しました。ブラウザ上でデータベースとのデータのやりとりができます。</p>
        <tr>
          <th id="usedLanguage">使用言語 </th>
          <td>Java(Servlet) , PostgreSQL</td>
        </tr>
      </div>

      <div class="works-box" id="todo">
        <h3><a href="http://taskforwantedly.herokuapp.com/" target="_blank">TODOアプリ</a></h3>
        <p>サマーインターンの課題として作成したTODOアプリです。レスポンシブデザインに対応しています。</p>
        <tr>
          <th id="usedLanguage">使用言語 </th>
          <td>React, TypeScript</td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
h3 > a {
  text-decoration: none;
}
.works-box{
    margin:  0;
}
#works-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 230px 230px 230px 230px;
}
#tristagram{
  grid-row: 1/2;
  grid-column: 1/2;
  padding: 0px 10px 0px 25vw;
}
#deeplearning{
  grid-row: 2/3;
  grid-column: 2/3;
  padding: 0px 25vw 0px 10px;
}
#database{
  grid-row: 3/4;
  grid-column: 1/2;
  padding: 0px 10px 0px 25vw;
}
#todo{
  grid-row: 4/5;
  grid-column: 2/3;
  padding: 0px 25vw 0px 10px;
}
#tristagram-image{
  grid-row: 1/2;
  grid-column: 2/3;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
