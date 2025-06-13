<template>
  <img 
    :src="linkedinIcon" 
    alt="LinkedIn" 
    :width="size" 
    :height="size"
    class="custom-icon"
  />
</template>

<script>
import linkedinIcon from '../../assets/icons/linkedin.svg'

export default {
  name: 'LinkedinIcon',
  props: {
    size: {
      type: [Number, String],
      default: 20
    }
  },
  data() {
    return {
      linkedinIcon
    }
  }
}
</script>

<style scoped>
.custom-icon {
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.custom-icon:hover {
  filter: brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(200deg);
}
</style>
