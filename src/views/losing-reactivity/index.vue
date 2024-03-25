<script setup>
import CourseList from "./CourseList.vue";
import { reactive } from "vue";

defineOptions({
  name: "LosingReactivity",
})

// This is all fine and well! The reactive() wraps an object making the object and everything inside of it reactive!
const course = reactive({
  courseId: '1234',
  students: ['Jimmy', 'Shirley', 'Danny']
})

// This is still fine! This function just updates the reactive property in a reactive object!
const changeCourseId = () => {
  course.courseId = '2345';
  course.students = [
    ...course.students,
    'Ben',
  ]; // you can even assign a whole new object/array/value to the property in a reactive object and it will update!
  course.students.push('Andrei')
}

</script>

<template>
  <div>
    <h1>Losing Reactivity</h1>
    <p>This is one way of losing reactivity in Vue. See the code!</p>
    <CourseList :course="course" />
    <button @click="changeCourseId">
      Change CourseId!
    </button>
  </div>
</template>

<style scoped>

</style>