<template>
  <div v-if="showPopup" class="video-popup">
    <div class="video-popup-content">
      <!-- <iframe :style="{ width: '80%' }" height="420" :src="videoUrl" frameborder="0" allowfullscreen></iframe> -->

      <video :style="{ width: '90%' }"  controls autoplay src="/assets/images/about-us/sheffiled_tour.mov" ref="videoPlayer" loop ></video>
      <button class="video_pop_button btn btn-primary" @click="closePopup">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showPopup: Boolean,
    videoUrl: String,
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.video-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-popup-content {
  background: transparent;
  padding: 0px;
  text-align: center;
  width: 45%;
  margin-top: 50px;
}

.video_pop_button {

  position: absolute;
  margin-left: -150px;
  margin-top: -30px;
}

.video-popup-content {
  overflow: hidden;
}

.video-popup-content video {
    width: 100%;
    margin-top: -10%;
    
}

@media only screen and (max-width: 768px) {

  .video-popup-content {
        
     width: 98%;
  }

}



body {
  overflow: hidden;
}
</style>
