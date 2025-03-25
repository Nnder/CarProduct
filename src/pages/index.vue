<template>
  <div class="CardWrapper">
    <v-card class="Card">
      <ImageSlider :images="product.images" />
      <v-card-title>
        {{ fullName }}
      </v-card-title>
      <v-card-subtitle>
        {{ product.price }}
      </v-card-subtitle>

      <OrderNow />
      <CarTabs :car="product" />
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import CarTabs from "@/components/CarTabs.vue";
import ImageSlider from "@/components/ImageSlider.vue";
import type { Car } from "@/types/car.types";
import { computed } from "vue";
import { reactive } from "vue";

const product = reactive<Car>({
  model: "cx5",
  brend: "mazda",
  year: 2024,
  category: "auto",
  price: 4_000_000,
  type: "Джип",
  technicalSpecifications: {
    "Цвет корпуса": "Красный",
    "Цвет салона": "Черный",
    "Тип передней подвески": "Независимая, пружинная",
    "Тип задней подвески": "Независимая, пружинная",
    "Передние тормоза": "Дисковые вентилируемые ",
    "Задние тормоза": "Дисковые",
    "Тип двигателя": "Бензиновый",
    "Максимальная мощность ": "мощность 156 л.с. (115 кВт) при 6000 об/мин ",
    "Коробка передач": "Автомат",
  },
  description:
    "Внедорожник 5 дв. C-класса, полный и передний привод. Автомат и механика. Бензиновые и дизельные двигатели мощностью от 150 до 256 лошадиных сил.",
  images: [
    {
      alt: "on road",
      src: "https://avatars.mds.yandex.net/get-verba/1030388/2a000001874b5c98c9d4039e9b4b0e1827fb/1200x900",
    },
    {
      alt: "left view",
      src: "https://avatars.mds.yandex.net/get-verba/1604130/2a000001874c1bba7926093161310b291167/1200x900",
    },
    {
      alt: "front view",
      src: "https://avatars.mds.yandex.net/get-verba/3587101/2a000001874c1bcb72cdae007106aabb8fe7/1200x900",
    },
    {
      alt: "back view",
      src: "https://avatars.mds.yandex.net/get-verba/1030388/2a000001874c1bea9a5d0fc8d2d8a22c8697/1200x900",
    },
    {
      alt: "inside view",
      src: "https://avatars.mds.yandex.net/get-verba/3587101/2a000001874c1c1850908196dd75cf9ffc3c/1200x900",
    },
  ],
});

const fullName = computed(() => {
  const { brend, model, year, type } = product;
  return `${brend} ${model} (${year}), ${type}`;
});
</script>

<style lang="scss">
.CardWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;

  .Card {
    max-width: 1680px;
    width: 100%;
  }
}
</style>
