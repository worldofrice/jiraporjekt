<script lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const ratingOptions = [
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: '5' },
]

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  props: {
    name: String
  },
  setup() {
    const mem = ref(ratingOptions[0])

    return {
      ratingOptions,
      mem,
    }
  },
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium text-gray-900">{{ name }}</h2>
    </div>

    <RadioGroup v-model="mem" class="mt-2">
      <RadioGroupLabel class="sr-only"> Vali hinnang </RadioGroupLabel>
      <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
        <RadioGroupOption as="template" v-for="option in ratingOptions" :key="option.name" :value="option"
          v-slot="{ checked }">
          <div
            :class="['cursor-pointer focus:outline-none', checked ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1']">
            <RadioGroupLabel as="p">
              {{ option.name }}
            </RadioGroupLabel>
          </div>
        </RadioGroupOption>
        <div>
          <label for="comment" class="block text-sm font-medium text-gray-700">Add your comment</label>
          <div class="mt-1">
            <textarea rows="4" name="comment" id="comment"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
      </div>

    </RadioGroup>
  </div>
</template>