<template>
  <div class="home">
    <p class="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus suscipit asperiores aut, deserunt eligendi distinctio ullam dicta ratione beatae iusto temporibus ex reiciendis vel illum atque nihil praesentium quasi.</p>
    <div class="carousel">
      <img name="slide">
      <div class="btn-wrap">
        <button @click="previous">vorige</button>
        <button @click="next">volgende</button>
      </div>
    </div>
  </div>
</template>

<script>
import {carouselMixin} from '../carouselMixin'
 export default {
    mixins:[carouselMixin],
    mounted() {
        this.slideshow()
    }
  };
</script>


<style scoped>
.carousel {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.btn-wrap {
  display: flex;
  padding-top: 0.5rem;
  align-items: center;
  justify-content: space-evenly;
}
.home {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  padding: 0 4rem 0 4rem;
  width: 85vw;
}
.description {
  width: 50vw;
}
img {
  width: 40vw;
  height: 80vh;
  border-radius: 10px;
}
button {
  background-color:rgb(23, 97, 105);
	border-radius:28px;
	border:0.1rem solid #60A3AB;
	display:inline-block;
	cursor:pointer;
	color:whitesmoke;
	padding:0.5rem 0.5rem;
	text-decoration:none;
}

</style>
