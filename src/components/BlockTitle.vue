<template>
    <div class="blockTitle__cont" v-if="largeS == 1">
        <img src="../assets/images/block-title-w.png" alt="" v-if="window.widthT > 1024">
        <img src="../assets/images/block-title-w-1024.png" alt=""
            v-else-if="window.widthT > 768 && window.widthT <= 1024">
        <img src="../assets/images/block-title-w-1024.png" alt=""
            v-else-if="window.widthT > 480 && window.widthT <= 768">
        <img src="../assets/images/block-title-w-320.png" alt="" v-else>
        <div class="blockTitle__text" v-if="window.widthT > 480">
            <span class="" data-aos="fade-up">{{ title }}</span>
        </div>
        <div class="blockTitle__text blockTitle__text__duo" v-else>
            <span class="">{{ firstString }} <br> {{ lastString }}</span>
        </div>
    </div>
    <div class="blockTitle__cont" v-else>
        <img src="../assets/images/block-title.png" alt="" v-if="window.widthT > 1024">
        <img src="../assets/images/block-title-1024.png" alt=""
            v-else-if="window.widthT > 768 && window.widthT <= 1024">
        <img src="../assets/images/block-title-768.png" alt="" v-else-if="window.widthT > 480 && window.widthT <= 768">
        <img src="../assets/images/block-title-320.png" alt="" v-else>
        <div class="blockTitle__text">
            <span class="" data-aos="fade-up">{{ title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            window: {
                widthT: 0
            },
            largeS: 0,
            firstString: '',
            lastString: '',
        }
    },
    name: 'BlockTitle',
    props: ['title', 'large'],
    methods: {
        handleResize() {
            this.window.widthT = window.innerWidth;
        }
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
        if (this.title.length > 20) {
            this.largeS = 1
            let arr = this.title.split(' ')
            if (arr.length > 3) {
                console.log(arr)
                if (arr.length == 4) {
                    this.firstString = arr[0] + ' ' + arr[1];
                    this.lastString = arr[2] + ' ' + arr[3];
                }
                else {
                    this.firstString = arr[0] + ' ' + arr[1] + ' ' + arr[2];
                    this.lastString = arr[3] + ' ' + arr[4];
                }
            }
            else {
                this.firstString = arr[0] + ' ' + arr[1];
                this.lastString = arr[2];
            }

        }
    }
}
</script>

<style>
.blockTitle__cont {
    position: relative;
    width: 100%;
}

.blockTitle__cont img {
    width: 100%;
}

.blockTitle__text {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    color: #00FFFF;
    letter-spacing: 0.04em;
    font-family: 'Oxygen';
    font-style: normal;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 14px;
    line-height: 105%;
}

@media screen and (max-width: 1440px) {
    .blockTitle__text {
        top: 10px;
    }
}

@media screen and (max-width: 1024px) {
    .blockTitle__text {
        top: 14px;
    }
}

@media screen and (max-width: 768px) {
    .blockTitle__text {
        top: 16px;
    }

    .blockTitle__text {
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    .blockTitle__text {
        top: 14px;
    }

    .blockTitle__text {
        font-size: 14px;
    }
}

@media screen and (max-width: 370px) {
    .blockTitle__text {
        top: 15px;
    }

    .blockTitle__text {
        font-size: 14px;
    }
}

@media screen and (max-width: 330px) {
    .blockTitle__text {
        top: 10px;
    }

    .blockTitle__text {
        font-size: 14px;
    }

    .blockTitle__text__duo {
        top: 5px;
    }
}
</style>