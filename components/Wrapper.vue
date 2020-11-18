<template>
  <div class="py-2">
    <div class="py-2 text-xs capitalize opacity-50">{{ title }}</div>
    <div :class="classes">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    classes: String,
  }
};
</script>
