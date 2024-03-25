<script setup>
import { shape, string, arrayOf } from 'vue-types'
import { toRef, toRefs } from "vue";

// This is still fine, the props will still be reactive by default!
const props = defineProps({
  course: shape({
    courseId: string().def('1234'),
    students: arrayOf(string()),
  })
})

// !!! This here is the problem !!!
// --------------------------------
// Destructuring the courseId and students array from the course prop is what causes it to lose reactivity!
// The courseId is now just a plain old javascript variable and if courseId in props.course gets updated (like with
// the function in the parent component). This value won't be updated!
const { courseId, students } = props.course;

console.log('course', props.course) // This will log out a Proxy object on the console.
console.log('course id', courseId); // This will log out just a plain javascript value

// to fix this, we can bind the specific ref we're destructuring:
const refdCourseId = toRef(props.course, 'courseId')

// or you can wrap the entire prop in a toRefs()
const { course } = toRefs(props);
</script>

<template>
  <p class="wontUpdate">CourseId: {{ courseId }}</p>
  <p class="wontUpdate">Students: {{ students }}</p>
  <p><span>*</span> these will not update even though the prop updates</p>
  <p>toRef() wrapped CourseID: {{ refdCourseId }}</p>
  <p>toRefs() wrapped course: {{ course }}</p>
</template>

<style scoped>
span, .wontUpdate:after {
  content: " *";
  color: red;
}
</style>