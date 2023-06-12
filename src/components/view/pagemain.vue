<template>
  <div class="demo-image__lazy" >
    <el-image v-for="url in urls" :key="url" :src="url" lazy />
  </div>
</template>

<script lang="ts" setup>
import image from "../../images/img.png"
import image2 from "../../images/img_1.png"
const urls = [
  image,
  image2
]
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.demo-image__lazy {
  width: 100%;
  margin: -40px;
  height: 700px;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: -10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>
