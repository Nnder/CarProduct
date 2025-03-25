<template>
  <v-tabs bg-color="primary" v-model="tab">
    <v-tab value="one">Описание</v-tab>
    <v-tab value="two">Характеристики</v-tab>
  </v-tabs>
  <v-card-text>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        {{ car.description }}
      </v-tabs-window-item>

      <v-tabs-window-item value="two">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Название</th>
              <th class="text-left">Характеристика</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in car.technicalSpecifications" :key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<script setup lang="ts">
import type { Car } from "@/types/car.types";
import { ref } from "vue";

const tab = ref();

defineProps<{
  car: Car;
}>();
</script>
