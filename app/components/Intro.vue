<script lang="ts" setup>
import IntroSection from './IntroSection.vue';

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
        <div class="guide-bar"></div>
        
        <div class="intro-sections">
            <IntroSection id="start" overriden-outer-css="name-intro-section">    
                <p class="start-text gray-text intro-font">[Start]</p>
                <p class="text intro-font intro-title">
                    Hi, my name is 
                    <span class="accent">Matthias Leeb</span>
                </p>
                <p class="text intro-font intro-title intro-title-end">
                    and I develop <span class="intro-font-bold italic">{{ developingText }}</span>
                </p>
                <p class="start-text gray-text intro-font">Let me show you...</p>
            </IntroSection>

            <IntroSection>
                <p class="intro-font dark-gray-text title-sections-text">WEB</p>
                <p class="text intro-font web-text">
                    I have developed several websites by now and I have been doing it for about 3 years on and off
                </p>
                <p class="gray-text intro-font">
                    Tech stack: HTML/JS/CSS, Vue/Nuxt, React/NextJS
                </p>
            </IntroSection>

            <IntroSection>
                <p class="intro-font dark-gray-text title-sections-text">Backends</p>
                <p class="text intro-font web-text">
                    I have a solid understanding of networking and am currently taking a course in networking
                </p>
                <p class="gray-text intro-font">
                    Tech stack: Go
                </p>
            </IntroSection>

            <IntroSection>
                <p class="intro-font dark-gray-text title-sections-text">Systems</p>
                <p class="text intro-font web-text">
                    Developing systems in the best way possible is my favorite thing to do. 
                    This includes making basic game engines and toolchains for others to develop in.
                </p>
                <p class="gray-text intro-font">
                    Tech stack: Zig, Rust, C++, C, Java, OCaml, Gleam
                </p>
            </IntroSection>
        </div>

    </section>
</template>