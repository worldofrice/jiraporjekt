<script lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import Course from '../components/course.vue'

const courses = [
{ id: 0, name: "Matemaatika" },
{ id: 1, name: "Inglise keel" },
{ id: 2, name: "Eesti keel" },
{ id: 3, name: "Programmeerimine" }
]


export default {
  components: {
    Course,
  },
  props: {
    courses: courses,
  },
  data() {
    return {
      // Initial feedback data (could be fetched from an API or initialized here)
      feedback: {
        0: {
          rating: null,
          comment: "",
        },
        1: {
          rating: null,
          comment: "",
        },
        // You can dynamically add more entries here if needed
      }
    };
  },
  methods: {
    // Handle updates from each Course component
    handleUpdate(updatedCourse: { index: any; data: any; }) {
      const { index, data } = updatedCourse;
      this.feedback[index] = data; // Update feedback with the new rating/comment
    },

    // Submit the entire feedback object to the backend
    submitFeedback() {
      console.log(this.feedback);
      // You can send the feedback to the backend using axios or fetch
      // Example:
      // axios.post('/api/submit-feedback', this.feedback)
      //   .then(response => {
      //     console.log('Feedback submitted successfully:', response);
      //   })
      //   .catch(error => {
      //     console.error('There was an error submitting the feedback:', error);
      //   });
    }
  }
}

</script>

<template>

  <Head title="Feedback" />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto my-20">
      <form action="#" method="post">
        <div class="bg-white shadow overflow-hidden rounded-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="course in courses" class="px-6 py-4" :key="course.id">
              <Course :name="course.name" />
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