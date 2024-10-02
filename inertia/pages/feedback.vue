<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'
  import Course from '#components/course'
  const courses = [
    "Matemaatika",
    "Inglise keel",
    "Eesti keel",
    "Programmeerimine"
  ]
</script>

<template>
    <Head title="Feedback" />
    <div class="container mx-auto px-4" v-for="course in courses">
        <Course :name="course"/>
    </div>
</template>