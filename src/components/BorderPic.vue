<template>
  <div class="border-pic">
    <img :src="require('@/assets/images/' + images[currentIndex])" alt="Border" />
  </div>
</template>

<script>
export default {
  name: 'BorderPic',
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
.border-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; /* 可以根据需要调整宽度 */
  height: auto; /* 保持高度自适应 */
}
.border-pic img {
  width: 100%;
  height: auto;
}
</style>
