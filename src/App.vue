<template>
  <div id="app">
    <div class="image-container">
      <MakeupPic ref="makeup" class="makeup-pic" :images="makeupImages" @changeImage="updateImage('makeup', $event)" />
      <BackGround ref="background" class="background-pic" :images="backgroundImages" @changeImage="updateImage('background', $event)" />
      <BodyPic ref="body" class="body-pic" :images="bodyImages" @changeImage="updateImage('body', $event)" />
      <ClothesPic ref="clothes" class="clothes-pic" :images="clothesImages" @changeImage="updateImage('clothes', $event)" />
      <PantsPic ref="pants" class="pants-pic" :images="pantsImages" @changeImage="updateImage('pants', $event)" />
      <HairPic ref="hair" class="hair-pic" :images="hairImages" @changeImage="updateImage('hair', $event)" />
      <JewelryPic ref="jewelry" class="jewelry-pic" :images="jewelryImages" @changeImage="updateImage('jewelry', $event)" />
      <SocksPic ref="socks" class="socks-pic" :images="socksImages" @changeImage="updateImage('socks', $event)" />
    </div>

    <div class="buttons">
      <button @click="animateButton($event, 'makeup')" class="styled-button">Change Makeup</button>
      <button @click="animateButton($event, 'body')" class="styled-button">Change Body</button>
      <button @click="animateButton($event, 'clothes')" class="styled-button">Change Clothes</button>
      <button @click="animateButton($event, 'pants')" class="styled-button">Change Pants</button>
      <button @click="animateButton($event, 'hair')" class="styled-button">Change Hair</button>
      <button @click="animateButton($event, 'jewelry')" class="styled-button">Change Jewelry</button>
      <button @click="animateButton($event, 'socks')" class="styled-button">Change Socks</button>
    </div>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue';
import MakeupPic from './components/MakeupPic.vue';
import BodyPic from './components/BodyPic.vue';
import ClothesPic from './components/ClothesPic.vue';
import PantsPic from './components/PantsPic.vue';
import HairPic from './components/HairPic.vue';
import JewelryPic from './components/JewelryPic.vue';
import SocksPic from './components/SocksPic.vue';

export default {
  name: 'App',
  components: {
    BackGround,
    MakeupPic,
    BodyPic,
    ClothesPic,
    PantsPic,
    HairPic,
    JewelryPic,
    SocksPic,
  },
  data() {
    return {
      backgroundImages: ['background1.jpg'],
      makeupImages: ['makeup1.jpg', 'makeup2.jpg', 'makeup3.jpg'],
      bodyImages: ['body1.jpg'],
      clothesImages: ['clothes1.jpg', 'clothes2.jpg', 'clothes3.jpg'],
      pantsImages: ['pants1.jpg', 'pants2.jpg', 'pants3.jpg'],
      hairImages: ['hair1.jpg', 'hair2.jpg'],
      jewelryImages: ['jewelry1.jpg', 'jewelry2.jpg'],
      socksImages: ['socks1.jpg'],
      currentMakeupIndex: 0,
      currentBackgroundIndex: 0,
      currentBodyIndex: 0,
      currentClothesIndex: 0,
      currentPantsIndex: 0,
      currentHairIndex: 0,
      currentJewelryIndex: 0,
      currentSocksIndex: 0,
    };
  },
  methods: {
    changeComponentImage(component) {
      switch (component) {
        case 'makeup':
          this.$refs.makeup.changeImage();
          break;
        case 'body':
          this.$refs.body.changeImage();
          break;
        case 'clothes':
          this.$refs.clothes.changeImage();
          break;
        case 'pants':
          this.$refs.pants.changeImage();
          break;
        case 'hair':
          this.$refs.hair.changeImage();
          break;
        case 'jewelry':
          this.$refs.jewelry.changeImage();
          break;
        case 'socks':
          this.$refs.socks.changeImage();
          break;
        default:
          break;
      }
    },
    updateImage(component, newIndex) {
      switch (component) {
        case 'makeup':
          this.currentMakeupIndex = newIndex;
          break;
        case 'body':
          this.currentBodyIndex = newIndex;
          break;
        case 'clothes':
          this.currentClothesIndex = newIndex;
          break;
        case 'pants':
          this.currentPantsIndex = newIndex;
          break;
        case 'hair':
          this.currentHairIndex = newIndex;
          break;
        case 'jewelry':
          this.currentJewelryIndex = newIndex;
          break;
        case 'socks':
          this.currentSocksIndex = newIndex;
          break;
        default:
          break;
      }
    },
    animateButton(event, component) {
      const button = event.target;
      button.classList.add('animate__bounce');
      this.changeComponentImage(component);
      setTimeout(() => {
        button.classList.remove('animate__bounce');
      }, 1000); // 动画持续时间
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px;
}
body {
  background-color: black;
  margin: 0;
  padding: 0;
  color: white; /* 使文本颜色变白，以便在黑色背景上清晰可见 */
}

.image-container {
  flex: 1;
  position: relative;
  border: 4px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.buttons {
  border: 4px solid blue;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px;
}

.styled-button {
  background-color: rgb(255, 0, 200);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.styled-button:hover {
  transform: scale(1.1);
}

.makeup-pic {
  z-index: 6;
}

.background-pic {
  z-index: 10;
}

.body-pic {
  z-index: 2;
}

.clothes-pic {
  z-index: 5;
}

.pants-pic {
  z-index: 4;
}

.hair-pic {
  z-index: 8;
}

.jewelry-pic {
  z-index: 7;
}

.socks-pic {
  z-index: 3;
}
</style>
