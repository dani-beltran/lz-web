<template>
  <section class="section section-2" id="section-2">
    <!-- Content for section 2 goes here -->
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
    overflow: hidden;
}

.section-2::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 35%;
    height: 100%;
    background-image: url('@/assets/bg/purple-square.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    transform: translateY(-50%);
    z-index: 1;
}

.section-2::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 20%;
    width: 35%;
    height: 100%;
    background-image: url('@/assets/bg/pink-square.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    transform: translateY(-50%); /* Slightly offset to the bottom */
    z-index: 2;
}

@media (max-width: 1280px) {
    .section-2::before {
        top: 0;
        transform: none;
        width: 100%;
        height: 50%;
    }
    
    .section-2::after {
        top: 0;
        width: 100%;
        height: 50%;
        background-position: center;
        transform: none ;
    }
}
</style>
