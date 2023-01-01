<template>
  <v-card
    max-width="448"
    height="900"
    class="mx-auto"
    color="#F2F0E7"
    flat
  >
    <v-layout>
      <SubBar />
      <v-main>
        <!-- Write Here -->

      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import SubBar from "../components/SubBar";
export default {
  name: "App",
  components: { SubBar },
  data: () => ({}),
};
</script>

<style></style>
