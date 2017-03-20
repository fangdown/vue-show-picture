<template>
	<div class="wrapper">
		<div class="container">
            <p class="currentPage" v-if = "this.images.length > 0">{{this.currentPage}} / {{this.images.length}}</p>
			<swiper :options="swiperOption" ref="currentSwiper" class="swiper-box">
				<swiper-slide v-for="item in images" class="swiper-item"><img :src="item.src" @click="linkToDetail" alt="" /></swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      index: 1,
      images: '',
      swiperOption: {
        notNextTick: true,
        name: 'picture',
        setWrapperSize: true,
        preventClicks: false,
        onSlideChangeEnd: (swiper) => {
          this.currentPage = parseInt(swiper.activeIndex + 1)
        }
      }
    }
  },
//   通过路由的before钩子解除router-view缓存限制
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.images = unescape(vm.getUrl().images)
      if (!(vm.images instanceof Array)) {
        vm.images = JSON.parse(vm.images)
      }
      vm.showIndexPic(vm.$route.query.index)
    })
  },
  mounted () {
    this.index = this.getUrl().index
    this.currentPage = parseInt(this.index) + 1
    this.images = unescape(this.getUrl().images)
    if (!(this.images instanceof Array)) {
      this.images = JSON.parse(this.images)
    }
  },
  computed: {
    swiper () {
      return this.$refs.currentSwiper.swiper
    }
  },
  methods: {
    showIndexPic: function (index) {
      this.swiper.slideTo(index, 0, false)
    },
    getUrl: function () {
      var a = window.location.hash
      var c = {}
      if (a.indexOf('?') !== -1) {
        var startlen = a.indexOf('?')
        var d = a.substr(startlen + 1)
        var strs = d.split('&')
        for (var b = 0; b < strs.length; b++) {
          c[strs[b].split('=')[0]] = decodeURI(strs[b].split('=')[1])
        }
      }
      return c
    },
    linkToDetail: function () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.wrapper {
	position: fixed;
	top:0;
	left: 0;
	background-color:#000;
	width:100%;
	height:100%;
	overflow: hidden;
	z-index: 100;
}
.container {
    position: relative;
	width:100%;
    height: 100%;
}
.currentPage {
    position: absolute;
    top: 10px;
    width: 100%;
    font-size: 24px;
    color: #fff;
    z-index: 1000;
    text-align: center;
}
.swiper-box {
    height: inherit;
}
.swiper-slide {
	text-align: center;
}
.swiper-item {
	display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-item>img {
	width: 100%;
}
</style>
