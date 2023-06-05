<template>
  <nav class="top-menu">
    <ul class="menu-main">
      <router-link to="/" class="left-item">{{appData.lang=='ru'?'Главная':'Main Page'}}</router-link>
      <router-link to="/about" class="left-item">{{appData.lang=='ru'?'О сайте':'About'}}</router-link>
      <router-link to="/mapufa" class="left-item">{{appData.lang=='ru'?'Интерактивная карта':'InterActive Map'}}</router-link>
      <router-link to="/mapufa_edit" class="left-item">{{appData.lang=='ru'?'Редактирование':'Редактирование'}}</router-link>
      <router-link to="/addmark" class="left-item">{{appData.lang=='ru'?'Добавить известную личность':'Add Famous People'}}</router-link>
      <li class="right-item"><a href="">{{appData.lang=='ru'?'Авторизоваться':'Log in'}}</a></li>
      <li class="right-item"><a  @click="changeLanguage">RU-EN</a></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>
//import axios from 'axios';

import { useMapStore } from './store/store';

export default {
  name: "App",
  components: {},
  data() {
    return {
      streets_api: [],
      appData:useMapStore()
    }
  },
    methods:{
      changeLanguage(){      
        //this.appData.lang=='ru'?this.appData.lang='en':this.appData.lang='ru'
        this.appData.changeLang()
        console.log('Изменения в приложении',this.appData.lang)
      }

    } 
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Arimo");
.top-menu {
  position: relative;
  background: rgba(253, 253, 253, 0.3);
  backdrop-filter: blur(10px);
}
.menu-main {
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
}
.menu-main:after {
  content: "";
  display: table;
  clear: both;
}
.left-item {
  float: left;
}
.right-item {
  float: right;
}
.menu-main a {
  text-decoration: none;
  display: block;
  line-height: 40px;
  padding: 0 20px;
  font-size: 22px;
  letter-spacing: 2px;
  font-family: "Arimo", sans-serif;
  color: #492607;
  transition: 0.3s linear;
}
.menu-main a:hover {
  background: rgba(253, 253, 253, 0.4);
}
@media (max-width: 830px) {
  .menu-main {
    padding-top: 90px;
    text-align: center;
  }
  .menu-main li {
    float: none;
    display: inline-block;
  }
  .menu-main a {
    line-height: normal;
    padding: 20px 15px;
    font-size: 16px;
  }
}
@media (max-width: 630px) {
  .menu-main li {
    display: block;
  }
}
</style>
