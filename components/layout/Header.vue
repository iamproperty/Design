<template>
  <header class="border-b-2 border-indigo-900 p-4 dark:border-white">
    <div class="mx-auto flex h-[--header-height] max-w-7xl items-center justify-between gap-4 px-4">
      <div class="flex flex-1 items-center">
        <NuxtLink to="/">
          <img
            src="https://iamproperty.com/wp-content/uploads/2023/01/iamproperty-Mono-Reversed.svg"
            alt="iamproperty front end guild"
            class="hidden h-10 w-auto dark:inline-flex"
          >
          <img
            src="https://iamproperty.com/wp-content/uploads/2023/01/iamproperty-Colour-Reversed.svg"
            alt="iamproperty front end guild"
            class="h-10 w-auto dark:hidden"
          >
        </NuxtLink>
      </div>

      <ul id="primary-navigation" class="flex items-center gap-4">
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">
            Articles
          </NuxtLink>
        </li>
      </ul>

      <ul class="flex flex-1 items-center justify-end gap-4">
        <li>
          <NuxtLink to="https://iamproperty.com">
            <Icon name="streamline:browser-website-1" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com">
            <Icon name="mdi:github" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
#primary-navigation a {
  @apply font-bold py-4 px-2 rounded;
}

#primary-navigation a:hover {
  @apply bg-indigo-100 dark:bg-slate-900 opacity-100;
}

#primary-navigation .router-link-active { /* the nuxt class applied to current route */
  @apply bg-indigo-200 dark:bg-slate-800;
}

a {
  @apply transition-all duration-200;
}

a:hover {
  @apply opacity-75;
}
</style>
