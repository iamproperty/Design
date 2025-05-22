<script lang="ts" setup>
const props = defineProps(['points'])
</script>

<template>
<div class="key-points">
    <div v-for="(item, index) in points" :key="index" class="item">
        <i class="fa-regular" :class="item.icon"></i>
        <p class="lead pb-1">{{ item.heading }}</p>
        <p class="pb-0">{{ item.summary }}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>

    .key-points {
        display: grid;
        gap: 1rem; 
    }

    .item {
        border: 1px solid #EEEEEE;
        border-radius: 0.625rem;
        padding: 1rem;
    }

    i {
        background: #B4E6A5;
        border-radius: 50%;
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        font-size: 1.25rem;

    }

    @media screen and (min-width: 62rem) {
        .key-points {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>