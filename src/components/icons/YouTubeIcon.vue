<template>
  <img 
    :src="youtubeIcon" 
    alt="YouTube" 
    :width="size" 
    :height="size"
    :class="['custom-icon', { 'inverted': inverted }]"
  />
</template>

<script>
import youtubeIcon from '@/assets/icons/youtube.svg'

export default {
  name: 'YouTubeIcon',
  props: {
    size: {
      type: [Number, String],
      default: 20
    },
    inverted: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      youtubeIcon
    }
  }
}
</script>

<style scoped>
.custom-icon {
  transition: all 0.3s ease;
}

.custom-icon.inverted {
  filter: brightness(0) invert(1);
}

.custom-icon.inverted:hover {
  filter: brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(200deg);
}

.custom-icon:not(.inverted):hover {
  filter: sepia(1) saturate(2) hue-rotate(200deg);
}
</style>

