<template>
  <section class="section section-2" id="section-2">
    <div class="two-column-layout">
      <div class="left-column">
        <img 
          src="@/assets/imgs/journey-behavioral-mobile-layerz.png" 
          alt="Journey Behavioral Mobile LayerZ"
          class="journey-image"
        />
        <img 
          src="@/assets/imgs/nolita-chair-screenshot.png" 
          alt="Modal Review User LayerZ"
          class="modal-image"
        />
      </div>
      <div class="right-column">
        <!-- Content for right column goes here -->
      </div>
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
    padding: 0 80px;
}

.two-column-layout {
    display: flex;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    align-items: center;
    gap: 60px;
    position: relative;
    z-index: 3;
}

.left-column {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right-column {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.journey-image {
    max-width: 60%;
    width: auto;
    height: auto;
    object-fit: contain;
}

.modal-image {
    max-width: 40%;
    margin-top: 40%;
    width: auto;
    height: auto;
    object-fit: contain;
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
    .section {
        padding: 0 40px;
    }
    
    .two-column-layout {
        flex-direction: column;
        gap: 40px;
        text-align: center;
    }
    
    .left-column {
        flex-direction: row;
        gap: 30px;
        justify-content: center;
        align-items: normal;
    }
    
    .left-column,
    .right-column {
        flex: none;
        width: 100%;
    }
    
    .journey-image,
    .modal-image {
        max-width: 40%;
        max-height: 50vh;
    }

    .modal-image {
        margin-top: 20px;
    }
    
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
        transform: none;
    }
}

</style>
