<template>
  <div class="back-ground">
    <img :src="require('@/assets/images/' + images[currentIndex])" alt="BackGround" />
<!--     <button @click="changeImage">Change BackGround</button>
 -->  </div>
</template>

<script>
export default {
  name: 'BackGround',
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
.back-ground {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%; /* 可以根据需要调整宽度 */
  height: auto; /* 保持高度自适应 */
}
.back-ground img {
  width: 100%;
  height: auto;
}
.back-ground button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
