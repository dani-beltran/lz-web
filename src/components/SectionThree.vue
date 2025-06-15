<template>
  <section class="section section-3" id="section-3">
    <div class="grid-container">
      <div class="grid-item">
        <Sparkles class="icon"></Sparkles>
        <div>
          <h2 class="highlight">Improve UX</h2>
          <p>Timely & relevant actions that feel natural</p>
        </div>
      </div>
      <div class="grid-item">
        <HeartHandshake class="icon"></HeartHandshake>
        <div>
          <h2 class="highlight">Build customer intimacy</h2>
          <p>React to behaviour & preferences in real time</p>
        </div>
      </div>
      <div class="grid-item">
        <Brain class="icon"></Brain>
        <div>
          <h2 class="highlight">Understand intent</h2>
          <p>Detect subtle cues and respond appropriately</p>
        </div>
      </div>
      <div class="grid-item">
        <Rocket class="icon"></Rocket>
        <div>
          <h2 class="highlight">Boost conversions</h2>
          <p>Engage customers at the right moment</p>
        </div>
      </div>
      <div class="grid-item">
        <ImageUpscale class="icon"></ImageUpscale>
        <div>
          <h2 class="highlight">No-code UX activation</h2>
          <p>Empower teams to create experiences without coding</p>
        </div>
      </div>
      <div class="grid-item">
        <Unplug class="icon"></Unplug>
        <div>
          <h2 class="highlight">Open by design</h2>
          <p>Connect any CRM, CDP, LLM and more</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Rocket, Sparkles, Brain, Unplug, HeartHandshake, WandSparkles, ImageUpscale } from "lucide-vue-next";

export default {
  name: "SectionThree",
  components: {
    Rocket,
    Sparkles,
    HeartHandshake,
    Brain,
    Unplug,
    ImageUpscale
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
  padding: 160px 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1600px;
}
.grid-item {
  color: #ffffff; /* White */
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
}

.icon {
  width: 100px;
  height: 100px;
  color: #ffffff; /* White */
}
</style>
