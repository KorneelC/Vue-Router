<template>
    <div class="omgeving-wrapper">
        <div class="description">
            <h2>Cultuur</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus, nemo voluptates modi dolor cum, quaerat similique vel obcaecati animi, placeat provident non voluptatibus tenetur odit ullam? Sit, iste sapiente!</p>
            <hr>
            <h2>Strand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore ipsam at quis quasi accusamus ad distinctio, eos, non quos impedit recusandae ea dolores culpa facere numquam voluptas aspernatur eveniet!</p>
            <hr>
            <h2>Openbaar vervoer</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, temporibus ab similique accusantium ducimus accusamus? Architecto cumque ipsa perspiciatis velit sed, error, adipisci maxime sequi reprehenderit itaque modi eligendi enim!</p>
            <hr>
            <h2>Cinema</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum tenetur amet, labore magni assumenda nisi voluptas. Numquam nulla voluptatem, labore aliquam architecto, cum, magnam omnis pariatur est minus maxime?</p>
            <hr>
            <h2>Zwembad</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, expedita asperiores. Nam asperiores debitis cupiditate harum distinctio praesentium possimus eligendi! Unde odit voluptatibus sint illo nostrum quia! Impedit, nihil nesciunt!</p>

        </div>
        <div class="pictures-omgeving">
            <img class="images-omgeving" :src="require('@/assets/images/' +carouselImage[0] + '.jpg')" alt="">
            <img class="images-omgeving" :src="require('@/assets/images/' +carouselImage[1] + '.jpg')" alt="">
            <img class="images-omgeving" :src="require('@/assets/images/' +carouselImage[2] + '.jpg')" alt="">
        </div>
        

    </div>
</template>

<script>
    export default {
        data () {
            return {
                carouselImage: ['background-portfolio2', 'par2', 'foto-hut']
            }
        }
        
    }
</script>

<style scoped>
    .omgeving-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        height: 95%;
        padding: 0rem 1rem 0rem 1rem;
    }
    .description {
        width: 67.5%;
        height: 90%;
    }
    .pictures-omgeving {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 22.5%;
        height: 90%;
    }
    .images-omgeving {
        height: 32%;
    }
    img {
        border-radius: 12px;
    }

</style>