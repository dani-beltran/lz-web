<template>
  <section class="section section-2" id="section-2">
    <div class="grid-container">
      <div class="grid-item">
        <div class="content-header">
          <Eye class="section-icon highlight" />
          <div class="text-container">
            <h2>Behavioral insights</h2>
            <p>
              Understand user interest through real-time analysis of behavioral
              signals
            </p>
          </div>
        </div>
        <div class="image-container purple">
          <img
            src="@/assets/imgs/journey-behavioral-mobile-layerz.png"
            alt="Journey Behavioral Mobile LayerZ"
            class="item-image"
          />
        </div>
      </div>
      <div class="grid-item">
        <div class="content-header">
          <MessagesSquare class="section-icon highlight" />
          <div class="text-container">
            <h2>Trigger smart interactions</h2>
            <p>Smart, contextual interactions at the peak of intent</p>
          </div>
        </div>

        <div class="image-container pink">
          <img
            src="@/assets/imgs/nolita-chair-screenshot.png"
            alt="Modal Review User LayerZ"
            class="item-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Eye, MessagesSquare } from "lucide-vue-next";

export default {
  name: "SectionTwo",
  components: {
    Eye,
    MessagesSquare,
  },
};
</script>

<style scoped>
.section {
  width: 100vw;
  position: relative;
  padding: 60px 80px;
}

.section-2 {
  background-color: #ffffff; /* White */
  position: relative;
  overflow: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1600px;
  margin: auto;
}

.grid-item {
  color: #270972; /* Indigo */
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
}

.image-container {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  z-index: 0;
}

.image-container.rotated::before {
  transform: rotate(270deg);
}

.image-container.pink::before {
  background-image: url("@/assets/bg/pink-square.png");
}
.image-container.purple::before {
  background-image: url("@/assets/bg/purple-square.png");
}

.text-container {
  text-align: left;
  width: 100%;
}

.item-image {
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 50vh;
  position: relative;
  z-index: 1;
}

.content-header {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
}

.section-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

@media (max-width: 1280px) {
  .section {
    padding: 0 40px;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
