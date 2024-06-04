<template>
  <div id="app">
    <div ref="imageContainer" class="image-container">
      <MakeupPic ref="makeup" class="makeup-pic" :images="makeupImages" @changeImage="updateImage('makeup', $event)" />
      <BackGround ref="background" class="background-pic" :images="backgroundImages" @changeImage="updateImage('background', $event)" />
      <BodyPic ref="body" class="body-pic" :images="bodyImages" @changeImage="updateImage('body', $event)" />
      <ClothesPic ref="clothes" class="clothes-pic" :images="clothesImages" @changeImage="updateImage('clothes', $event)" />
      <PantsPic ref="pants" class="pants-pic" :images="pantsImages" @changeImage="updateImage('pants', $event)" />
      <HairPic ref="hair" class="hair-pic" :images="hairImages" @changeImage="updateImage('hair', $event)" />
      <JewelryPic ref="jewelry" class="jewelry-pic" :images="jewelryImages" @changeImage="updateImage('jewelry', $event)" />
      <SocksPic ref="socks" class="socks-pic" :images="socksImages" @changeImage="updateImage('socks', $event)" />
      <ChainsPic ref="chains" class="chains-pic" :images="chainsImages" @changeImage="updateImage('chains', $event)" />
      <ShoesPic ref="shoes" class="shoes-pic" :images="shoesImages" @changeImage="updateImage('shoes', $event)" />
      <BorderPic ref="border" class="border-pic" :images="borderImages" @changeImage="updateImage('border', $event)" />
    </div>

    <div class="buttons">
      <button @click="animateButton($event, 'makeup')" class="styled-button">Change Makeup</button>
      <button @click="animateButton($event, 'body')" class="styled-button">Change Body</button>
      <button @click="animateButton($event, 'clothes')" class="styled-button">Change Clothes</button>
      <button @click="animateButton($event, 'pants')" class="styled-button">Change Pants</button>
      <button @click="animateButton($event, 'hair')" class="styled-button">Change Hair</button>
      <button @click="animateButton($event, 'jewelry')" class="styled-button">Change Jewelry</button>
      <button @click="animateButton($event, 'socks')" class="styled-button">Change Socks</button>
      <button @click="animateButton($event, 'chains')" class="styled-button">Change Chains</button>
      <button @click="animateButton($event, 'shoes')" class="styled-button">Change Shoes</button>
      <button @click="animateButton($event, 'border')" class="styled-button">Change Border</button>
      <button @click="takeScreenshot" class="styled-button">Take Screenshot</button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import BackGround from './components/BackGround.vue';
import MakeupPic from './components/MakeupPic.vue';
import BodyPic from './components/BodyPic.vue';
import ClothesPic from './components/ClothesPic.vue';
import PantsPic from './components/PantsPic.vue';
import HairPic from './components/HairPic.vue';
import JewelryPic from './components/JewelryPic.vue';
import SocksPic from './components/SocksPic.vue';
import ChainsPic from './components/ChainsPic.vue';
import ShoesPic from './components/ShoesPic.vue';
import BorderPic from './components/BorderPic.vue';

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
    ChainsPic,
    ShoesPic,
    BorderPic,
  },
  data() {
    return {
      backgroundImages: ['background1.jpg','background2.jpg','background3.jpg','background4.jpg'],
      makeupImages: [ 'makeup3.jpg','makeup1.jpg', 'makeup2.jpg',],
      bodyImages: ['body1.jpg'],
      clothesImages: ['clothes14.jpg','clothes15.jpg','clothes16.jpg','clothes17.jpg','clothes12.jpg','clothes13.jpg','clothes14.jpg','clothes18.jpg','clothes19.jpg','clothes20.jpg','clothes21.jpg','clothes22.jpg','clothes23.jpg','clothes1.jpg', 'clothes2.jpg', 'clothes3.jpg', 'clothes4.jpg', 'clothes5.jpg', 'clothes6.jpg', 'clothes7.jpg', 'clothes8.jpg', 'clothes9.jpg', 'clothes10.jpg', 'clothes11.jpg'],
      pantsImages: ['pants6.jpg', 'pants7.jpg', 'pants8.jpg', 'pants9.jpg', 'pants10.jpg','pants11.jpg','pants1.jpg', 'pants2.jpg', 'pants3.jpg', 'pants4.jpg', 'pants5.jpg'],
      hairImages: ['hair1.jpg', 'hair2.jpg','hair3.jpg','hair4.jpg','hair5.jpg','hair6.jpg','hair7.jpg','hair8.jpg','hair9.jpg','hair10.jpg','hair11.jpg','hair12.jpg'],
      jewelryImages: ['jewrlry1.jpg', 'jewrlry2.jpg', 'jewrlry7.jpg', 'jewrlry8.jpg', 'jewrlry9.jpg', 'jewrlry10.jpg', 'jewrlry3.jpg', 'jewrlry4.jpg', 'jewrlry5.jpg', 'jewrlry6.jpg'],
      socksImages: ['empty.jpg','socks2.jpg','socks3.jpg','socks4.jpg','socks1.jpg'],
      chainsImages: ['chains1.jpg', 'chains2.jpg', 'chains3.jpg', 'chains4.jpg', 'chains5.jpg', 'chains6.jpg', 'chains7.jpg'],
      shoesImages: ['shoes11.jpg','shoes2.jpg', 'shoes3.jpg', 'shoes4.jpg', 'shoes5.jpg', 'shoes1.jpg',  'shoes6.jpg', 'shoes7.jpg', 'shoes8.jpg', 'shoes9.jpg', 'shoes10.jpg'],
      borderImages: ['empty.jpg','border1.jpg'],
      currentMakeupIndex: 0,
      currentBackgroundIndex: 0,
      currentBodyIndex: 0,
      currentClothesIndex: 0,
      currentPantsIndex: 0,
      currentHairIndex: 0,
      currentJewelryIndex: 0,
      currentSocksIndex: 0,
      currentChainsIndex: 0,
      currentShoesIndex: 0,
      currentBorderIndex: 0,
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
      case 'chains':
        this.$refs.chains.changeImage();
        break;
      case 'shoes':
        this.$refs.shoes.changeImage();
        break;
      case 'border':
        this.$refs.border.changeImage();
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
      case 'chains':
        this.currentChainsIndex = newIndex;
        break;
      case 'shoes':
        this.currentShoesIndex = newIndex;
        break;
      case 'border':
        this.currentBorderIndex = newIndex;
        break;
      default:
        break;
    }
  },
  animateButton(event, component) {
    const button = event.target;
    button.classList.add('animated-button');
    this.changeComponentImage(component);
    setTimeout(() => {
      button.classList.remove('animated-button');
    }, 1000); // 动画持续时间
  },
  takeScreenshot() {
  const element = this.$refs.imageContainer;
  html2canvas(element, {
    useCORS: true,
    scale: 2,
    width: element.scrollWidth,
    height: element.scrollHeight
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'image-container-screenshot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

}

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
@keyframes custom-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.animated-button {
  animation: custom-bounce 1s ease-in-out;
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
  height: 80vh; /* 根据需要调整高度 */
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
  padding: 8px 16px;
  border: none;
  font-size: 14px;
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
  z-index: 0;
}

.body-pic {
  z-index: 1;
}

.clothes-pic {
  z-index: 5;
}

.pants-pic {
  z-index: 4;
}

.hair-pic {
  z-index: 7;
}

.jewelry-pic {
  z-index: 8;
}

.socks-pic {
  z-index: 2;
}

.chains-pic {
  z-index: 9;
}

.shoes-pic {
  z-index: 3;
}

.border-pic {
  z-index: 12;
}
</style>
