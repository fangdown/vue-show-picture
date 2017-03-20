<template>
  <div class="img-list">
    <h1>点击图片，弹出图片大图，可左右滑动</h1>
    <ul>
      <li class="img-list-item" v-for = "(item,index) in images"><img :src="item.src" @click = "toPicture(index)"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        images: [
          {
            'src': 'http://appstorecos.coolyun.com/group1/share_upload/11/112ca8cb0b2b6ec00d5689511209bc5c.jpg?'
          },
          {
            'src': 'http://appstorecos.coolyun.com/group8/share_upload/00/0045a2d9bcb4eefdeccd0dd86d98976c.jpg?'
          },
          {
            'src': 'http://appstorecos.coolyun.com/group4/share_upload/bb/bb627c7779981735762078a50feb5749.jpg?'
          },
          {
            'src': 'http://appstorecos.coolyun.com/group4/share_upload/bb/bb627c7779981735762078a50feb5749.jpg?'
          },
          {
            'src': 'http://appstorecos.coolyun.com/group2/share_upload/2a/2aa3fae0842035b4c5523e5f1c3900df.jpg?'
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
  .img-list {
    margin: 0 10px;
  }
  .img-list > h1 {
    padding: 0.5rem;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    text-align: center;
  }
  .img-list > ul {
    overflow: hidden;
    text-align: center;
    list-style: none;
  }
  .img-list-item {
    float: left;
    width: 3rem;
    margin-right: 10px;
  }
  .img-list-item > img {
    display: block;
    width: 3rem;
    margin-bottom: 5px;
  }
</style>
