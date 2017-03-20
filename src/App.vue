<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
    this.initFontSize()
  },
  methods: {
    initFontSize: function () {
      var b = document.documentElement
      var a = b.clientWidth
      b.style.fontSize = a / 10.8 + 'px'
      if (a > 800) {
        b.style.fontSize = '16px'
      }
    }
  }
}
</script>

<style>
html,body {
  position: relative;
  width: 100%;
  height: 100%;
}
html,body,ul,li,div,p,h1,h2,h3 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#app {
  background-color: #f5f5f5;
  height: 100%;
}
</style>
