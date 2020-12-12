<template>
  <div>
    <Wrapper title="Brand colors" classes="grid grid-cols-3 gap-6" nocode>
      <div class="block h-40" v-for="(variant, index) in colors.variants">
        <div class="relative flex h-32 overflow-hidden rounded shadow-lg">
          <div class="absolute flex items-center justify-center w-full h-full text-content-primary"><span class="font-mono tracking-widest uppercase">{{ index }}</span></div>
          <div v-for="(shade, index) in variant" :class="'w-1/3 '+ shade"></div>
        </div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ index }}</div>
      </div>
    </Wrapper>
    <Wrapper title="content colors" classes="grid grid-cols-5 gap-6" nocode>
      <div class="block h-40">
        <div class="h-32 overflow-hidden rounded shadow-lg bg-default"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">default</div>
      </div>
      <div class="block h-40" v-for="(color, index) in colors.content">
        <div :class="'h-32 overflow-hidden rounded shadow-lg ' + color"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color }}</div>
      </div>
    </Wrapper>
    <Wrapper title="State colors" classes="grid grid-cols-4 gap-6" nocode>
      <div class="block h-40" v-for="(color, index) in colors.state">
        <div :class="'h-32 overflow-hidden rounded shadow-lg ' + color"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color }}</div>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  data() {
    return {
      colors: {
        'variants': {
          'primary': [
            'bg-primary-lighten',
            'bg-primary',
            'bg-primary-darken',
          ],
          'secondary': [
            'bg-secondary-lighten',
            'bg-secondary',
            'bg-secondary-darken',
          ],
          'accent': [
            'bg-accent-lighten',
            'bg-accent',
            'bg-accent-darken',
          ],
        },
        'content': [
          'bg-content-100',
          'bg-content-200',
          'bg-content-300',
          'bg-content-400',
          'bg-content-500',
          'bg-content-600',
          'bg-content-700',
          'bg-content-800',
          'bg-content-900',
        ],
        'state': [
          'bg-info',
          'bg-success',
          'bg-warning',
          'bg-error',
        ],
      }
    }
  },
}
</script>
