<script setup lang="ts">
function handleClose() {
  navigateTo('/')
}
</script>

<template>
  <ApplicationWindow title="About Cool Dance Radio Player" @backdrop-click="handleClose" @key-esc="handleClose">
    <p>
      A mobile first, fast, ad and analytics free progressive web app for listening to
      <NuxtLink to="https://www.cooldanceradio.com/" target="_blank">Cool Dance Radio</NuxtLink>.
    </p>

    <h3>Why</h3>
    <p>
      This project was created out of love for <abbr title="Cool Dance Radio">CDR</abbr>.
      <NuxtLink to="https://github.com/Ex-iT/" target="_blank">I</NuxtLink> wanted an easy and quick way to listen to <abbr title="Cool Dance Radio">CDR</abbr> mainly on my phone.
      The idea is to keep this site simple and mobile friendly.
    </p>

    <h3>Technical info</h3>
    <p>
      Build with <NuxtLink to="https://nuxt.com/" target="_blank">Nuxt</NuxtLink> and <NuxtLink to="https://www.typescriptlang.org/" target="_blank">TypeScript</NuxtLink>.
      Code style is enforced with <NuxtLink to="https://github.com/antfu/eslint-config" target="_blank">@antfu/eslint-config</NuxtLink>.

      The source code of this project is public and on <NuxtLink to="https://github.com/Ex-iT/CDR-Player" target="_blank">Github</NuxtLink>.
      Feel free to report <NuxtLink to="https://github.com/Ex-iT/CDR-Player/issues" target="_blank">issues / feature request</NuxtLink> or fork this project.
    </p>

    <h3>Credits</h3>
    <ul>
      <li>
        Stream and track data from <NuxtLink to="https://www.cooldanceradio.com/" target="_blank">Cool Dance Radio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://icon-sets.iconify.design/ic/" target="_blank">Google Material Icons</NuxtLink>
      </li>
    </ul>
  </ApplicationWindow>
</template>
