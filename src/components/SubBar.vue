<template>
  <v-app-bar :elevation="0">
    <!-- 뒤로가기 아이콘 -->
    <v-btn @click="$router.go(-1)" icon="mdi-arrow-left"></v-btn>
    <!-- 성심당 이미지 로고 -->
    <v-spacer>
      <div id="logo">
        <a href="/">
          <img src="../assets/logo.png" alt="logo" />
        </a>
      </div>
    </v-spacer>
    <template v-slot:append>
      <!-- 종소리 아이콘 -->
      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
      <v-btn icon=""></v-btn>
    </template>
  </v-app-bar>
  <!-- <v-navigation-drawer v-model="drawer" absolute temporary> </v-navigation-drawer> -->
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "멤버십 안내" },
      { title: "이벤트" },
      { title: "매장 찾기" },
      { title: "선물하기" },
      { title: "전자영수증" },
      { title: "공지사항" },
      { title: "이용안내" },
      { title: "자주 묻는 질문" },
      { title: "설정" },
    ],
    right: null,
  }),
};
</script>

<style>
.divider {
  border: 0.5px solid #848484a8;
  width: 90%;
  margin: 1em auto;
}

#logo img {
  width: 100px;
  height: auto;
}

#logo {
  text-align: center;
}
</style>
