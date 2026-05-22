<script setup lang="ts">
const props = defineProps<{ phase: 'setup' | 'build'; active: number }>()

const phases = {
  setup: {
    label: 'Setting Up The Agent',
    base: 0,
    steps: ['Open Terminal', 'Install Deps', 'Install Agent', 'Make Folder', 'Start Agent', 'Choose Model'],
  },
  build: {
    label: 'Building The App',
    base: 6,
    steps: ['Configure', 'Build', 'Debug'],
  },
} as const

const p = phases[props.phase]
const total = p.steps.length
const stepNo = p.base + props.active
const stepLabel = p.steps[props.active - 1]
</script>

<template>
  <div class="wsprog">
    <div class="wsprog__label">
      <span>{{ p.label }}</span>
      <b>Step {{ stepNo }} / {{ p.base + total }}</b>
      <span class="now">{{ stepLabel }}</span>
    </div>
    <div class="wsprog__bar">
      <div
        v-for="(s, i) in p.steps"
        :key="i"
        class="wsprog__seg"
        :class="{ done: i + 1 < props.active, active: i + 1 === props.active }"
      />
    </div>
  </div>
</template>
