<template>
  <div class="socks-pic">
    <img :src="require('@/assets/images/' + images[currentIndex])" alt="Socks" />
<!--     <button @click="changeImage">Change Socks</button>
 -->  </div>
</template>

<script>
export default {
  name: 'SocksPic',
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
.socks-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* 可以根据需要调整宽度 */
  height: auto; /* 保持高度自适应 */
}
.socks-pic img {
  width: 100%;
  height: auto;
}
.socks-pic button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
