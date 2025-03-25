<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card-actions>
        <v-btn
          v-bind="activatorProps"
          color="primary"
          text="Закажите сейчас"
        ></v-btn>
      </v-card-actions>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Закажите сейчас" class="pa-4">
        <v-text-field label="Имя*" required></v-text-field>
        <v-text-field
          label="Телефон*"
          v-mask="'+7 (###) ###-##-##'"
          v-model="phone"
          required
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="warning"
            text="Отмена"
            @click="isActive.value = false"
          ></v-btn>
          <v-btn
            color="primary"
            text="Заказать"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-expect-error
import { mask } from "vue-the-mask";
const vMask = mask;

const phone = ref("");
</script>
