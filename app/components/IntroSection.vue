<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        overridenOuterCss?: string;
        overridenInnerCss?: string;
    }>(),
    {
        overridenOuterCss: "intro-section",
        overridenInnerCss: "intro-section-container"
    }
)
</script>

<template>
    <section :class="props.overridenOuterCss">
        <section :class="props.overridenInnerCss">
            <slot />
        </section>
    </section>
</template>