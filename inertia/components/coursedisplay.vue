<script setup lang="ts">
import { defineProps } from 'vue';
import { CourseInfo } from '../pages/adminpage.vue';

const props = defineProps<{
  modelValue: CourseInfo;
}>();
</script>


<template>
    <div class="border border-gray-300 bg-white shadow px-4 py-5 rounded-lg">
        <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900">{{ modelValue.name }}</h2>
        </div>
        <dl class="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-2">
            <div class="px-4 py-5 bg-white shadow rounded-lg border border-gray-100 overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">Average Rating</dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ modelValue.averageRating }}</dd>
            </div>

            <div class="px-4 py-5 bg-white shadow rounded-lg border border-gray-100 overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">Comments</dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ modelValue.feedbacks }}</dd>
            </div>
        </dl>
    </div>
</template>