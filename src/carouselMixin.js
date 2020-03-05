export const carouselMixin = {
    data() {
        return {
            imageArray: ['background-portfolio2', 'par2', 'foto-hut'],
            counter: 0,
            counterForLoop: 0

        };
    },
    methods: {
        slideshow() {
            for (this.counterForLoop = 0; this.counterForLoop < this.imageArray.length; this.counterForLoop++)
                document.slide.src = require('@/assets/images/' + this.imageArray[this.counter] + '.jpg')
            if (this.counter < this.imageArray.length - 1) {
                this.counter++;

            }
            else {
                this.counter = 0;
            }
            setTimeout(this.slideshow, 10000);

        },
        next() {
            if (this.counter >= this.imageArray.length - 1) {
                this.counter = 0;
                document.slide.src = require('@/assets/images/' + this.imageArray[this.counter] + '.jpg');
            }
            else {
                this.counter++;
                document.slide.src = require('@/assets/images/' + this.imageArray[this.counter] + '.jpg');
            }

        },
        previous() {
            if (this.counter <= 0) {
                this.counter = this.imageArray.length - 1;
                document.slide.src = require('@/assets/images/' + this.imageArray[this.counter] + '.jpg');
            }
            else {
                this.counter--;
                document.slide.src = require('@/assets/images/' + this.imageArray[this.counter] + '.jpg');
            }
        }
    },
    
}