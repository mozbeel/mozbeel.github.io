<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const mobileMenuOn = ref(false);

const menuRef = ref(null)

// handle click outside
function handleClickOutside(event: Event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <header class="no-select" id="#header">
        <div class="left">
        <a href="#header" class="name-title title-font grow-on-hover">
            <span class="accent"><</span> 
            <span class="text">Matthias Leeb</span>
            <span class="accent">/></span>
        </a>

        </div>

        <nav class="right-desktop">
            <a href="#start" class="tab-title gray-text title-font glow-on-hover">[Start]</a>
            <a href="#about" class="tab-title gray-text title-font glow-on-hover">[About]</a>
            <a href="#contact" class="tab-title gray-text title-font glow-on-hover">[Contact]</a>
        </nav>

        <nav class="right-mobile">
            <button class="menu-button tab-title gray-text glow-on-hover title-font" @click="mobileMenuOn = !mobileMenuOn">
                [Menu]
            </button>
            {{
            }}
            <div class="mobile-menu" :class="{ open: mobileMenuOn }">
                <a href="#start" class="tab-title gray-text title-font glow-on-hover">[Start]</a>
                <a href="#about" class="tab-title gray-text title-font glow-on-hover">[About]</a>
                <a href="#contact" class="tab-title gray-text title-font glow-on-hover">[Contact]</a>
            </div>
        </nav>
    </header>
</template>