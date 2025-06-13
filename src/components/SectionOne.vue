<template>
  <section class="section section-1" id="section-1">
    <img 
      src="@/assets/logo/layerz-logo.png" 
      alt="LayerZ Logo" 
      class="logo"
    />
    <h1>Taking Customer Experiences,
  level to another <span class="highlight">level</span>.</h1>
  </section>
</template>

<script>
export default {
  name: 'SectionOne'
}
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

.section-1 {
    background-color: #270972; /* Indigo */
    background-image: url('@/assets/bg/bg-pattern.png');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
    padding: 0px 80px;
}

.logo {
    position: absolute;
    top: 80px;
    left: 80px;
    height: 223px;
    width: auto;
    z-index: 10;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .section-1 {
        background-size: auto 80%;
        background-position: right top;
    }
}

@media (max-width: 480px) {
    .section-1 {
        background-size: auto 60%;
        background-position: center right;
    }
}
</style>
