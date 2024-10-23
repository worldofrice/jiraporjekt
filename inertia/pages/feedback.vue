<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Course from '../components/course.vue';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/20/solid';

// Define props for courses
const props = defineProps<{
  courses: { id: number; name: string }[];
}>();

// Create a reactive object to hold feedback
const feedback = ref<{ [key: number]: { rating: number; comment: string } }>({});
const userName = ref('');
const userClass = ref('');

// Initialize the feedback structure for each course
const initFeedback = () => {
  props.courses.forEach(course => {
    feedback.value[course.id] = {
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

        <!-- Name Input Field -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            id="name"
            v-model="userName"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <!-- Class Input Field -->
        <div class="mb-4">
          <label for="class" class="block text-sm font-medium text-gray-700">Your Class</label>
          <input
            id="class"
            v-model="userClass"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your class"
            required
          />
        </div>

        <div class="bg-white shadow overflow-hidden rounded-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="course in props.courses" class="px-6 py-4" :key="course.id">
              <Course :name="course.name" :courseId="course.id" v-model="feedback[course.id]" />
            </li>
          </ul>
        </div>
        <button type="submit"
          class="inline-flex justify-center items-center self-center px-6 py-2 my-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <EnvelopeIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Saada ära!
        </button>
      </form>
    </div>
  </div>
</template>
