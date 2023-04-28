<template>
    <div class="rapper">
        <swiper class="parentSwiper" :options="swiperOption">
            <swiper-slide v-for="item of dataList" :key="item.id">
                <img class="swiperImg" :src="item.url" />
            </swiper-slide>
        </swiper>
    </div>

</template>
<script>
export default {
    name: 'swiper-example-autoplay',
    title: 'Autoplay',
    data() {
        return {
            swiperOption: {
                loop: true
            },
            dataList: [
                {
                    id: '1',
                    url: "https://animemiru.jp/wp-content/uploads/2018/04/n00.jpg",
                },
                {
                    id: '2',
                    url: "https://naltupo-movie.work/wp-content/uploads/2022/05/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2022-05-06-055813-500x211.jpg"
                }
            ]
        }
    }
}
</script>
<style scoped>
.rapper {
    height: 3.5rem;
    width: 100%;
}

.parentSwiper {
    height: 100%;
    width: 100%;
}

.swiperImg {
    width: 100%;
    height: 100%;
}
</style>