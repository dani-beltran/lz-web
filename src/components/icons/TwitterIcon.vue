<template>
  <img 
    :src="twitterIcon" 
    alt="Twitter" 
    :width="size" 
    :height="size"
    class="custom-icon"
  />
</template>

<script>
import twitterIcon from '../../assets/icons/x.svg'

export default {
  name: 'TwitterIcon',
  props: {
    size: {
      type: [Number, String],
      default: 20
    }
  },
  data() {
    return {
      twitterIcon
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
