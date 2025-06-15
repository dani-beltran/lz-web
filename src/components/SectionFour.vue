<template>
  <section class="section section-4" id="section-4">
    <div class="section-header">
      <h2>Our Team</h2>
      <p>Meet the passionate individuals behind LayerZ.</p>
    </div>
    <div class="section-content">
      <div class="grid-container">
        <div class="grid-item" style="background-color: rgba(113, 44, 246, 0.01)">
          <img
            src="@/assets/imgs/mike.jpg"
            alt="Team Member 1"
            class="item-image"
          />
          <div class="text-container">
            <h3>Mike Rogers</h3>
            <p>CEO and Co-founder</p>
            <a href="https://www.linkedin.com/in/mike-a-rogers/" aria-label="LinkedIn">
              <LinkedinIcon class="linkedin-icon" />
            </a>
          </div>
        </div>
        <div class="grid-item" style="background-color: rgba(243, 56, 158, 0.01)">
          <img
            src="@/assets/imgs/marc.jpg"
            alt="Team Member 2"
            class="item-image"
          />
          <div class="text-container">
            <h3>Marc Lamarche</h3>
            <p>CMO and Co-founder</p>
            <a href="https://www.linkedin.com/in/marclamarche/" aria-label="LinkedIn">
              <LinkedinIcon class="linkedin-icon" />
            </a>
          </div>
        </div>
        <div class="grid-item" style="background-color: rgba(92, 149, 255, 0.01)">
          <img
            src="@/assets/imgs/dani.jpg"
            alt="Team Member 3"
            class="item-image"
          />
          <div class="text-container">
            <h3>Daniel Beltran</h3>
            <p>CTO and Co-founder</p>
            <a href="https://www.linkedin.com/in/daniellidonbeltran/" aria-label="LinkedIn">
              <LinkedinIcon class="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LinkedinIcon from './icons/LinkedinIcon.vue'

export default {
  name: "SectionFour",
  components: {
    LinkedinIcon
  }
};
</script>

<style scoped>
.section {
  width: 100vw;
  position: relative;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.section-4 {
  background-color: #FFF;
}

.section-header {
  max-width: 1600px;
  width: 100%;
  margin-bottom: 40px;
  color: #270972; /* Indigo */
}

.section-content {
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 120px;
  width: 100%;
}

.grid-item {
  border-radius: 8px;
  /* padding: 20px; */
}

.item-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #e0e0e0;
}

.text-container p {
  color: #6b7280; /* Gray */
}

.linkedin-icon {
  width: 24px;
  height: 24px;
  margin-top: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.linkedin-icon:hover {
  opacity: 0.7;
}

@media (max-width: 1280px) {
  .section {
    padding: 40px 40px;
  }

  .grid-container {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 20px;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }

}
</style>
