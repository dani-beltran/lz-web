<template>
  <section class="section section-3" id="section-3">
    <div class="grid-container">
      <div class="grid-item">
        <Rocket class="icon"></Rocket>
        <div class="feature-text">
          <h3 class="highlight">Boost conversions</h3>
          <p>Engage customers at the right moment</p>
        </div>
      </div>
      
      <div class="grid-item">
        <HeartHandshake class="icon"></HeartHandshake>
        <div class="feature-text">
          <h3 class="highlight">Build customer intimacy</h3>
          <p>React to behaviour & preferences in real time</p>
        </div>
      </div>

      <div class="grid-item">
        <Brain class="icon"></Brain>
        <div class="feature-text">
          <h3 class="highlight">Understand intent</h3>
          <p>Detect subtle cues and respond appropriately</p>
        </div>
      </div>

      
      <div class="grid-item">
        <Sparkles class="icon"></Sparkles>
        <div class="feature-text">
          <h3 class="highlight">Improve UX</h3>
          <p>Timely & relevant actions that feel natural</p>
        </div>
      </div>

      <div class="grid-item">
        <Images class="icon"></Images>
        <div class="feature-text">
          <h3 class="highlight">No-code UX activation</h3>
          <p>Empower teams to create experiences without coding</p>
        </div>
      </div>
      
      <div class="grid-item">
        <Unplug class="icon"></Unplug>
        <div class="feature-text">
          <h3 class="highlight">Open by design</h3>
          <p>Connect any CRM, CDP, LLM and more</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Rocket, Sparkles, Brain, Unplug, HeartHandshake, Images } from "lucide-vue-next";

export default {
  name: "SectionThree",
  components: {
    Rocket,
    Sparkles,
    HeartHandshake,
    Brain,
    Unplug,
    Images
  },
};
</script>

<style scoped>
.section {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.section-3 {
  background-color: #270972; /* Indigo */
  padding: 160px 80px;
}

.section-3 h3 {
  font-weight: bold;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  row-gap: 80px;
  width: 100%;
  max-width: 1600px;
}
.grid-item {
  color: #ffffff; /* White */
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
}

.feature-text h3 {
  line-height: 1.2;
  height: 2.4em; /* 2 lines */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.feature-text p {
  line-height: 1.5;
  height: 3em; /* 2 lines */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.icon {
  width: 100px;
  height: 100px;
  min-width: 80px;
  color: #ffffff; /* White */
}

@media (max-width: 1280px) {
  .section-3 {
    padding: 80px 40px;
  }
  
}

@media screen and (max-width: 1024px) {
  .feature-text h3 {
    height: 1.2em; /* 1 lines */
    -webkit-line-clamp: 1;
    line-clamp: 1;
  } 
}

@media screen and (max-width: 768px) {
  .section-3 {
    padding: 60px 20px;
  }

  .grid-container {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }

  .icon {
    width: 80px;
    height: 80px;
    min-width: 80px;
  }
}

</style>
