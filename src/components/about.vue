<template>
  <div >
    <h1>About</h1>
    <div id="self-introduction" style="position:inherit">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>住江 祐哉(Yuya Sumie)</td>
          </tr>
          <tr>
            <th>Birthday</th>
            <td>1997/07/21</td>
          </tr>
          <tr>
            <th>From</th>
            <td>奈良県</td>
          </tr>
          <tr>
            <th>Hobby</th>
            <td>旅行 , スノーボード , スマブラ</td>
          </tr>
          <tr>
            <th>University</th>
            <td>京都大学 工学部 情報学科</td>
          </tr>
          <tr>
            <th>Lab</th>
            <td><a href="http://www.mm.media.kyoto-u.ac.jp/" target="_blank">飯山研</a></td>
          </tr>
          <tr>
            <th>Wantedly</th>
            <td><a href='https://www.wantedly.com/users/97753112' target="_blank">Yuya Sumie</a></td>
          </tr>
          <tr>
            <th>Github</th>
            <td><a href='https://github.com/MONAKA0721' target="_blank">MONAKA0721</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>

<style>
table{
  margin: auto;
  font-size: 1.5vw;
}
th{
  text-align: left;
  padding-left: 20px;
  padding-right: 10px;
  font-weight:lighter;
}
td{
  text-align: left;
  padding-left: 20px;
  padding-right: 10px;
  font-weight: lighter;
}
td > a {
  text-decoration: none;
}
@media (min-width: 1000px){
  #self-introduction{
    margin-left:  300px;
    margin-right: 300px;
  }
}
@media (max-width:999px) {
  #self-introduction{
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
@media screen and (max-width:414px) {
  table{
    font-size: 16px;
  }
}
</style>
