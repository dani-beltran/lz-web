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
        <Heart class="icon"></Heart>
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
        <Zap class="icon"></Zap>
        <div>
          <h2 class="highlight">No-code UX activation</h2>
          <p>Empower teams to create experiences without coding</p>
        </div>
      </div>
      <div class="grid-item">
        <Plug class="icon"></Plug>
        <div>
          <h2 class="highlight">Open by design</h2>
          <p>Connect any CRM, CDP, LLM and more</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Rocket, Sparkles, Heart, Brain, Zap, Plug } from "lucide-vue-next";

export default {
  name: "SectionThree",
  components: {
    Rocket,
    Sparkles,
    Heart,
    Brain,
    Zap,
    Plug,
  },
};
</script>

<style scoped>
.section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.section-3 {
  background-color: #270972; /* Indigo */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
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
