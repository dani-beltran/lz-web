<template>
  <section class="section section-2" id="section-2">
    <div class="content">
      <!-- Content for section 2 goes here -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTwo'
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

.section-2 {
    background-color: #ffffff; /* White */
    position: relative;
}

.section-2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/bg/bg-pattern.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: auto 100%;
    transform: scaleY(-1) scaleX(-1);
    z-index: 1;
    pointer-events: none;
}

.content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 1280px) {
    .section-2::before {
        background-size: auto 60%;
        background-position: left top;
    }
}

@media (max-width: 480px) {
    .section-2::before {
        background-size: auto 50%;
        background-position: left top;
    }
}
</style>
