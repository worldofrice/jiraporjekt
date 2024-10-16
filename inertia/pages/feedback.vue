<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'
  import Course from '../components/course.vue'
  const courses = [
    "Matemaatika",
    "Inglise keel",
    "Eesti keel",
    "Programmeerimine"
  ]
</script>

<template>

  <Head title="Feedback" />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto my-20">
      <form action="#" method="post">
        <div class="bg-white shadow overflow-hidden rounded-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="course in courses" class="px-6 py-4" :key="course">
              <Course :name="course" />
            </li>
          </ul>
        </div>
        <button type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <EnvelopeIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Saada ära!
        </button>
      </form>
    </div>
  </div>
</template>