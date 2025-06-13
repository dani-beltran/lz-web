<template>
  <section class="section section-1" id="section-1">
    <!-- Content for section 1 goes here -->
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
    background-color: #4338ca; /* Indigo */
    background-image: url('@/assets/bg/bg-pattern.png');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
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
