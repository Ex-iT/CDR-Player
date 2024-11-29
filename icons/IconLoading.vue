<script setup lang="ts">
defineComponent({
  name: 'IconLoading',
})
</script>

<template>
  <svg viewBox="0 0 72 72">
    <circle
      cx="50%"
      cy="50%"
      r="45%"
      fill="none"
      stroke="currentColor"
      stroke-width="10%"
      stroke-linecap="round"
      stroke-dasharray="130%"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 36 36"
        to="360 36 36"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>
