<template>
  <div class="container">
    <router-link to="/tags/vue/">
    <div class="topic">
      <div class="topic-title">
        <h3>Vue</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/vue.svg')" alt="Vue">
      </div>
    </div>
    </router-link>
    <router-link to="/tags/angular/">
    <div class="topic">
      <div class="topic-title">
        <h3>Angular</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/angular.svg')" alt="Angular">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3>React</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/react.svg')" alt="React">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3>NodeJs</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/nodejs.svg')" alt="Nodejs">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3>HTML</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/html-5.svg')" alt="HTML5">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3>CSS</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/css-3.svg')" alt="CSS3">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3>Javascript</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/javascript.svg')" alt="Javascript">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3>Base de Datos</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/database.svg')" alt="Database">
      </div>
    </div>
    </router-link>
    <router-link to="/">
    <div class="topic">
      <div class="topic-title">
        <h3> Programación</h3>
      </div>
      <div class="bg-topic">
        <img :src="$withBase('/code.svg')" alt="Programacion">
      </div>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media screen and (max-width: 450px) {
  .container {
    grid-template-columns: 1fr !important;
  }
}
@media (min-width: 451px) and (max-width: 740px) {
  .container {
    grid-template-columns: 1fr 1fr !important;
  }
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
}
.container > a {
  margin: 10px;
  text-align: center;
}
.topic {
  border: solid 2px #ddd;
  text-align: center;
}
.topic-title h3 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 5px;
  padding-bottom: 5px;
}
.bg-topic {
  background: #ffffff;
}
.bg-topic img {
  width: 100px;
  height: 100px;
}
</style>
