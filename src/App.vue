<template>
    <div class="content">
      <app-header></app-header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    'app-header': Header,
  }
 
}
</script>

<style>
body {
    font-family: 'Caveat';
    color: maroon;
}
.content {
  background-image: url('assets/images/foto-hut.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 100vh;

}
.fade-enter {
  opacity:0;
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
}

</style>
