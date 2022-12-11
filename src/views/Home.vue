<template>
  <!-- <v-card class="mx-auto" max-width="448"> -->
  <v-card
    max-width="448"
    height="900"
    class="mx-auto rounded-xl"
    color="#F2F0E7"
    flat
  >
    <v-layout>
      <MenuBar />
      <v-main>
        <v-card-text class="grey lighten-4">
          <v-img
            max-width="800"
            height="400"
            class="mx-auto"
            src="./src/assets/main-img.png"
          ></v-img>
        </v-card-text>
        <!-- 성심당 메인 메뉴 -->
        <v-container fluid>
          <!-- border lx or lg or custom -->
          <v-card style="margin-bottom: 20px;" class="rounded-lg" flat>
            <v-card-title>{{user.name}} 님 <span style="font-size:17px; font-weight: 400;">안녕하세요</span></v-card-title>
            <img src="../assets/guard.png" id="guard">
            <v-row dense>
              <v-col
                v-for="item in menu"
                :key="item"
                cols="4"
                class="menu-icon"
              >
                <img height="50" :src="item.img" />
              </v-col>
            </v-row>
          </v-card>
          <!-- 성심당 메인 공지 -->
          <v-card class="rounded-lg" flat>
            <v-card-text>
              <!-- 안되면 이미지로 교체 -->
              <v-icon>mdi-bullhorn-outline</v-icon>
              성심당 멤버십 App 안내
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
  <!-- </v-card> -->
</template>

<script>
import MenuBar from "../components/MenuBar";
// import BottomCotent from "../components/BottomCotent";
export default {
  name: "App",
  components: { MenuBar },
  data: () => ({
    menu: [
      { img: "./src/assets/menu-point.png" },
      { img: "./src/assets/menu-gift.png" },
      { img: "./src/assets/menu-coupon.png" },
      { img: "./src/assets/menu-stamp.png" },
      { img: "./src/assets/menu-shop.png" },
      { img: "./src/assets/menu-shopping.png" },
    ],
  }),
};
</script>

<style>
.menu-icon {
  text-align: center;
  margin-top:15px;
  margin-bottom:15px;
}

.v-card {
  border-style: none;
}

#guard {
  position: absolute;
  width: 340px;
  top: 60%;
  left: 50%;
  transform: translate( -50%, -50% );

}
</style>

<!-- .main_image {
  position: relative;
}
.main_image_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50% );
  color: white;
} -->
