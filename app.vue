<template>
  <main>
    {{ nowPlaying }}
    <!-- <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="post in posts">
        {{ post.title }}
      </div>
    </div> -->
  </main>
</template>

<script setup>
import * as cheerio from "cheerio";

const url =
  "https://www.cooldanceradio.com/wp-admin/admin-ajax.php?action=rdj_now_playing";

const { pending, data } = await useFetch(url);

const $ = cheerio.load(data.value);
const nowPlaying =
  $(".playing_track .artist").text() +
  " " +
  $(".playing_track .separator").text() +
  " " +
  $(".playing_track .title").text();

console.log(nowPlaying);
</script>
