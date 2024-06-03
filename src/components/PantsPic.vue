<template>
  <div class="pants-pic">
    <img :src="require('@/assets/images/' + images[currentIndex])" alt="Pants" />
  </div>
</template>

<script>
export default {
  name: 'PantsPic',
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
.pants-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* 可以根据需要调整宽度 */
  height: auto; /* 保持高度自适应 */
}
.pants-pic img {
  width: 100%;
  height: auto;
}
</style>
