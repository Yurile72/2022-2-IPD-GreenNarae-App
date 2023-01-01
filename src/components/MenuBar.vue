<template>
  <v-app-bar :elevation="0">
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <!-- 성심당 이미지 로고 -->
    <v-spacer>
      <div id="logo">
        <a href="/">
          <img src="../assets/logo.png" alt="logo" />
        </a>
      </div>
    </v-spacer>
    <!-- <v-app-bar-title></v-app-bar-title> -->

    <template v-slot:append>
      <!-- 종소리 아이콘 -->
      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
      <v-btn icon="mdi-bell-outline"></v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" absolute temporary>
    <div class="menu-bar-info-1">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle> 안녕하세요 </v-list-item-subtitle>
          <v-list-item-title class="text-h6">
            {{ user.name }} 님 >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <div class="menu-bar-info-2">
      <v-list-item>
        <v-list-item-content>
          <a>포인트</a><a>{{ user.point }}</a
          ><a>P</a>
          <!-- <hr class="divider" /> -->
        </v-list-item-content>
      </v-list-item>
    </div>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content>
          <a :href="item.src" style="color: black; text-decoration: none">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </a>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "멤버십 안내", src: "#" },
      { title: "이벤트", src: "Stamp" },
      { title: "키워드 정하기", src: "VillageSetup" },
      { title: "픽업박스", src: "Pickup" },
      { title: "매장 찾기", src: "#" },
      { title: "선물하기", src: "#" },
      { title: "전자영수증", src: "#" },
      { title: "공지사항", src: "#" },
      { title: "이용안내", src: "#" },
      { title: "자주 묻는 질문", src: "#" },
      { title: "설정", src: "#" },
    ],
    right: null,
  }),
};
</script>

<style>
.menu-bar-info-1 {
  background-color: #5f301c;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}

.menu-bar-info-2 {
  background-color: #422618;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}

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
