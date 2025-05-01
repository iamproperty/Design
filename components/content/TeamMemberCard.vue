<script setup lang="ts">
    const props = defineProps(['image', 'name', 'position', 'team'])
</script>

<template>
    <div class="team-member">
        <img :src="props.image || 'https://placehold.co/532x270'"/>
        <p class="lead pb-0">{{ props.name }}</p>
        <p class="pb-0">{{ props.position }}</p>
        <p class="pb-0">{{ props.team }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .team-member {
        max-width: 15rem;
        width: 100%;

        img {
            border-radius: 0.55rem;
            margin-bottom: 1rem;
        }
    }
</style>