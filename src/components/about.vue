<template>
  <div >
    <h1>About</h1>
    <div class="uk-card uk-card-default uk-card-body" id="self-introduction">
      <table class="uk-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>住江 祐哉</td>
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
            <th>University</th>
            <td style='white-space:nowrap; font-size:0.5em;'>京都大学 工学部 情報学科</td>
          </tr>
          <tr>
            <th>Hobby</th>
            <td>旅行 , スノボ</td>
          </tr>
          <tr>
            <th>Travel History</th>
            <td><a class="" href="#modal-media-image" uk-toggle>Image</a></td>
          </tr>
          <tr>
            <th>Github</th>
            <td><a class="" href='https://github.com/MONAKA0721' target="_blank">MONAKA0721</a></td>
          </tr>
        </tbody>
      </table>
      <div id="modal-media-image" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button class="uk-modal-close-outside" type="button" uk-close></button>
          <img src="../assets/map.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
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
</style>
