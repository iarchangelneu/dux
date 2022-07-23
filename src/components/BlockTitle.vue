<template>
    <div class="blockTitle__cont">
        <img src="../assets/images/block-title.png" alt="" v-if="window.widthT > 1024">
        <img src="../assets/images/block-title-1024.png" alt=""
            v-else-if="window.widthT > 768 && window.widthT <= 1024">
        <img src="../assets/images/block-title-768.png" alt="" v-else-if="window.widthT > 480 && window.widthT <= 768">
        <img src="../assets/images/block-title-320.png" alt="" v-else>
        <div class="blockTitle__text">
            <span class="">{{ title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            window: {
                widthT: 0
            }
        }
    },
    name: 'BlockTitle',
    props: ['title'],
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
}
</style>