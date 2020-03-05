<template>
    <div class="voorziening-wrapper">
        <div class="voorziening-body">
            <p class="uitleg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, praesentium explicabo, eaque cupiditate adipisci sed corrupti quidem alias ab laudantium non quasi, accusamus modi. Voluptatem, suscipit! Assumenda corrupti veniam fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos aut dolores, tenetur eius molestias voluptatum vel blanditiis eos quaerat deserunt perspiciatis, architecto numquam neque reprehenderit excepturi tempore, eligendi magnam!
            </p>
        </div>
        <div class="voorziening-body">
            <div class="secondary-image">
                <img class="secondary-image-size" :src="require('@/assets/images/' +carouselImage[counter] + '.jpg')">
                <i class="fas fa-angle-left next-previous-button" id="left-btn" @click="previous"></i>
            </div>
            <img :src="require('@/assets/images/' +carouselImage[counter] + '.jpg')" class="primary-image">
            <div class="secondary-image">
                <img class="secondary-image-size" :src="require('@/assets/images/' +carouselImage[counter] + '.jpg')">
                <i class="fas fa-angle-right next-previous-button" id="right-btn" @click="next"></i>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                counter:0,
                previousCounter: 2,
                nextCounter: 1,
                carouselImage: ['background-portfolio2', 'par2', 'foto-hut']
            }
        },
        methods: {
            next() {
                if(this.counter >= this.carouselImage.length - 1) {
                    this.counter = 0;
                }
                else {
                    this.counter++
                }
            },
            previous() {
                if(this.counter <= 0) {
                    this.counter = this.carouselImage.length - 1
                }
                else {
                    this.counter--                    
                }
            }
        }
        
    }
</script>

<style scoped>
.voorziening-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.voorziening-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47vh;
    width: 100vw;
    color: maroon;
}
.uitleg {
    width: 50%;
}
.secondary-image {
    width: 20%;
    height: 80%;
    position: relative;

}
.secondary-image-size {
    width: 100%;
    height: 100%;
}
.primary-image {
    width: 30%;
    height: 100%;
    background: maroon;
}
.primary-image:hover {
    height: 120%;
    width: 35%;
    margin-bottom: 4rem;
}
#left-btn {
    right: 0%;
}
#right-btn {
    left: 0%;
}

.next-previous-button {
  position: absolute;
  top: 50%;
  color: maroon;
  font-size: 1rem;
  cursor: pointer;
}
.fas {
    font-size: 3rem;
}
</style>