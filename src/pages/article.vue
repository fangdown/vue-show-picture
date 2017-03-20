<template>
  <div class="article">
    <h1>巴萨主场4-2逆转瓦伦西亚</h1>
    <section>
        <p>
腾讯体育3月20日讯 今日凌晨，西甲第28轮中，巴萨主场4-2逆转瓦伦西亚，联赛主场7连胜，落后少赛1场的皇马2分。瓦伦中卫曼加拉首开纪录，梅西梅开二度，苏亚雷斯破门，内马尔两度助攻，穆尼尔一度为客队追平比分。梅西连续8个赛季进球突破40球，西甲历史第一人。</p>
<img src="http://img1.gtimg.com/19/1922/192242/19224287_980x1200_292.jpg"  @click = "toPicture(0)" alt="">
<p>梅西梅开二度</p>
    <img src="http://img1.gtimg.com/19/1922/192242/19224285_980x1200_292.jpg"  @click = "toPicture(1)" alt="">
<p>梅西突破防守</p>
    <img src="http://img1.gtimg.com/19/1922/192242/19224286_980x1200_292.jpg"   @click = "toPicture(2)" alt="">
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        images: [
          {
            'src': 'http://img1.gtimg.com/19/1922/192242/19224287_980x1200_292.jpg'
          },
          {
            'src': 'http://img1.gtimg.com/19/1922/192242/19224285_980x1200_292.jpg'
          },
          {
            'src': 'http://img1.gtimg.com/19/1922/192242/19224286_980x1200_292.jpg'
          }
        ]
      }
    },
    methods: {
      toPicture: function (index) {
        this.$router.push({path: '/picture', query: {index: index, images: escape(JSON.stringify(this.images))}})
      }
    }
  }
</script>
<style scoped>
  .article > h1 {
      font-size: 16px;
      padding: 0.5rem;
      text-align: center;
  }
  p {
      text-indent: 0.5rem;
      font-size: 14px;
      padding: 10px;
  }
  section > img {
    display: block;
    width: 100%;
    margin-bottom: 5px;
  }
</style>
