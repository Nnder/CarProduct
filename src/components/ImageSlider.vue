<template>
  <swiper
    :navigation="true"
    :pagination="true"
    :modules="[Navigation, Pagination]"
    :loop="true"
    :autoplay-delay="5000"
    slides-per-view="auto"
    :space-between="10"
    class="swiper"
  >
    <swiper-slide v-for="img in images" :key="img.alt" class="swiper__slide">
      <v-img :alt="img.alt" :src="img.src" class="swiper__image" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Image as ImageType } from "@/types/car.types";

defineProps<{
  images: ImageType[];
}>();
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;

  &__slide {
    max-width: 600px;

    @media (max-width: 1024px) {
      max-width: 50%;
    }

    @media (max-width: 768px) {
      max-width: 50%;
    }

    @media (max-width: 480px) {
      max-width: 100%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
