<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue';
import CourseDisplay from '../components/coursedisplay.vue';

export interface CourseInfo {
    id: number,
    name: string,
    feedbacks: number,
    averageRating: number,
}

// Define props for courses
const props = defineProps<{
    coursesWithFeedbacks: CourseInfo[];
}>();

const courseInfos = ref<CourseInfo[]>([]);

// Initialize the feedback structure for each course
const initCourses = () => {
    console.log(props.coursesWithFeedbacks);
    props.coursesWithFeedbacks.forEach((course, i) => {
        courseInfos.value[i] = {
            id: course.id,
            name: course.name,
            feedbacks: course.feedbacks,
            averageRating: course.averageRating,
        };
    });
};

onMounted(() => {
    if (props.coursesWithFeedbacks && props.coursesWithFeedbacks.length > 0) {
        initCourses();
    } else {
        console.log("No courses found");
    }
});
</script>

<template>

    <Head title="Admin" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto my-20">
            <ul role="list" class="divide-y divide-gray-200">
                <li v-for="(course, i) in courseInfos" class="px-6 py-4 " :key="course.id">
                    <CourseDisplay v-model="courseInfos[i]" />
                </li>
            </ul>
        </div>
    </div>


</template>
