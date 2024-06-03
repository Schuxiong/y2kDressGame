<template>
  <div class="hair-pic">
    <img :src="require('@/assets/images/' + images[currentIndex])" alt="Hair" />
<!--     <button @click="changeImage">Change Hair</button>
 -->  </div>
</template>

<script>
export default {
  name: 'HairPic',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.$emit('changeImage', this.currentIndex);
    },
  },
};
</script>

<style scoped>
.hair-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    /* 添加以下样式以调整图片大小 */
    width: 100%; /* 可以根据需要调整宽度 */
  height: auto; /* 保持高度自适应 */
}
.hair-pic img {
  width: 100%;
  height: auto;
}
.hair-pic button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
