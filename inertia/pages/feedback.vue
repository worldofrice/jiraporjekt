<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Course from '../components/course.vue';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/20/solid';

// Define props for courses
const props = defineProps<{
  courses: Course[];
}>();

export interface Course {
  id: number,
  name: string,
  rating: number,
  comment: string,
}


// Create a reactive object to hold feedback
const feedback = ref<Course[]>([]);
const userName = ref('');
const userClass = ref('');

// Initialize the feedback structure for each course
const initFeedback = () => {
  props.courses.forEach((course, i) => {
    feedback.value[i] = {
      id: course.id,
      name: course.name,
      rating: 0,
      comment: '',
    };
  });
};

initFeedback();

// Method to handle form submission
const submitFeedback = () => {

  const feedbackToSubmit = {
    name: userName.value,
    class: userClass.value,
    feedback: feedback.value,
  };

  console.log(feedback.value)

  // Handle the submission logic here, e.g., sending data to your API
  //console.log(feedback.value);
  router.post('/feedback', feedbackToSubmit);
  // Example: Inertia.post('/feedback', feedback.value);
};
</script>

<template>

  <Head title="Feedback" />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto my-20">
      <form @submit.prevent="submitFeedback" class="justify-center flex flex-col">
        <div class="grid grid-cols-6 gap-6 py-4">

          <!-- Name Input Field -->
          <div
            class="col-span-6 sm:col-span-3 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
            <input required v-model="userName" type="text" name="name" id="name"
              class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter your name" />
          </div>

          <!-- Class Input Field -->
          <div
            class="col-span-6 sm:col-span-3 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
            <input required v-model="userClass" type="text" name="name" id="name"
              class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter your class" />
          </div>
        </div>

        <div class="bg-white border border-gray-300 shadow overflow-hidden rounded-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="(course, i) in props.courses" class="px-6 py-4" :key="course.id">
              <Course v-model="feedback[i]" />
            </li>
          </ul>
        </div>
        <button type="submit"
          class="inline-flex justify-center items-center self-center px-6 py-2 my-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <EnvelopeIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Saada ära!
        </button>
      </form>
    </div>
  </div>
</template>
