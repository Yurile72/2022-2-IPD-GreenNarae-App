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
        <span>{{this.name}} 님을 위한 성심의의 빵 추천</span>
        <!-- 빵 추천 -->
        <div>

        </div>
        <!-- 빵 카테고리 -->

        <!-- 빵 리스트 -->
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import SubBar from "../components/SubBar";
export default {
  name: "App",
  components: { SubBar },
  data: () => ({
    bread
  }),
};
</script>

<style></style>
