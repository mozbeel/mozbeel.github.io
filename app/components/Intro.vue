<script lang="ts" setup>
const developingText = ref("");
const developingTextOptions = [
    "Things",
    "Websites",
    "Game Engines",
    "Backends",
    "Systems"
];

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(0, developingTextOptions.length-1);
developingText.value = developingTextOptions[randomNumber] || "";
</script>

<template>
    <section class="intro">
        <section class="start" id="start">
            <section class="start-container">
                <p class="start-text gray-text intro-font">[Start]</p>
                <p class="text intro-font intro-title">
                    Hi, my name is 
                    <span class="accent">Matthias Leeb</span>
                </p>
                <p class="text intro-font intro-title intro-title-end">
                    and I develop <span class="intro-font-bold italic">{{ developingText }}</span>
                </p>
                <p class="start-text gray-text intro-font">Let me show you...</p>
            </section>
        </section>
    </section>
</template>