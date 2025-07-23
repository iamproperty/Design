<template>
  <div>
    <div class="flex gap-4">
      <Page class="flex-1">
        <slot />
      </Page>
      <Sidebar class="max-w-sm" />
    </div>
  </div>
</template>
