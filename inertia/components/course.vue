<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption, DisclosureButton, Disclosure, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';

const ratingOptions = [
  { name: '1', value: 1 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
];

// Define props for name and modelValue
const props = defineProps<{
  name: string;
  modelValue: { rating: number; comment: string };
}>();

const selectedRating = ref(props.modelValue.rating);
const comment = ref(props.modelValue.comment);

// Watch for changes in selectedRating and comment to update the model value
watch(selectedRating, (newVal) => {
  props.modelValue.rating = newVal;
});

watch(comment, (newVal) => {
  props.modelValue.comment = newVal;
});
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-900">{{ props.name }}</h2>
    </div>

    <RadioGroup v-model="selectedRating" class="mt-2" name="rating">
      <RadioGroupLabel class="sr-only"> Vali hinnang </RadioGroupLabel>
      <div class="grid grid-cols-5 gap-3 sm:grid-cols-5">
        <RadioGroupOption as="template" v-for="option in ratingOptions" :key="option.name" :value="option.value">
          <div
            :class="['cursor-pointer focus:outline-none', selectedRating === option.value ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1']">
            <RadioGroupLabel as="p">{{ option.name }}</RadioGroupLabel>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>

    <div class="w-full px-4 ">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
            Kommentaar
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            <div>
              <label for="comment" class="block text-sm font-medium text-gray-700">Add your comment</label>
              <div class="mt-1">
                <textarea v-model="comment" rows="4" name="comment" id="comment"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>
