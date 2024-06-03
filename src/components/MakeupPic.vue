<template>
  <div class="makeup-pic">
    <img :src="require('@/assets/images/' + images[currentIndex])" alt="Makeup" />
<!--     <button @click="changeImage">Change Makeup</button>
 -->  </div>
</template>

<script>
export default {
  name: 'MakeupPic',
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
.makeup-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* 可以根据需要调整宽度 */
  height: auto; /* 保持高度自适应 */
}
.makeup-pic img {
  width: 100%;
  height: auto;
}
.makeup-pic button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
