<template>
    <div>
        <img :src="geticonpath(name)" alt="`icon for ${name}`">
    </div>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    }
});

const geticonpath = (name) => `./icons/${name}.svg`;

</script>

<style lang="scss" scoped>

</style>