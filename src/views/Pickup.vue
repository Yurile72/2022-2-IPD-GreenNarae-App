<template>
  <v-card
    max-width="448"
    height="900"
    class="mx-auto rounded-xl"
    color="#F2F0E7"
    flat
  >
    <v-layout>
      <SubBar />
      <v-main>
        <!-- Write Here -->
        <v-container>
          <!-- 수령 방법 -->
          <v-row no-gutters>
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">QR아이콘</v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 rounded-lg elevation-9">
                <p>{{ user.name }}님의 메뉴가</p>
                <p>201번에서 기다리고 있습니다.</p>
              </v-sheet>
            </v-col>
          </v-row>
          <!-- QR 사용방법 -->
          <v-row no-gutters>
            <v-col cols="2">
              <v-sheet class="pa-5 ma-2 rounded-lg elevation-9">
                QR아이콘
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-5 ma-2 ">
                <p>1. 픽업박스는</p>
                <p>201번에서 기다리고 있습니다.</p>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
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
