<script setup>
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import simpleMiddleware from "@/services/simple-middleware.js";
import { ref } from "vue";

const taskList = [
  { taskId: 1, assignTo: "Jimmy" },
  { taskId: 2, assignTo: "Sally" },
  { taskId: 3, assignTo: "Bob" },
  { taskId: 4, assignTo: "Alice" },
];

const assignTaskResponse = ref("No request has been made yet!");

const bulkAssignTasks = async (taskList) => {
  assignTaskResponse.value = "Waiting for response...";
  try {
    const response = await simpleMiddleware.assignTasks(taskList);

    assignTaskResponse.value = response.message;
  } catch (error) {
    console.error("Error assigning tasks:", error);
    assignTaskResponse.value = error.response.data.message;
  }
};

const handleBulkAssignTasksClick = () => {
  bulkAssignTasks(taskList);
};

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Bulk Assign Tasks Example</h1>
    <p>This is an example where we submit a task list to an API and wait for the response.</p>
    <p>
      The example submits a list of tasks to SimpleMiddleware's <code>/task/bulk-assign</code> where
      the endpoint will randomly attempt to assign tasks to the requested user and return a response.
    </p>
    <p>
      Some will pass, some will fail. The response will be a message indicating how many tasks were
      successfully assigned.
    </p>
    <button @click="handleBulkAssignTasksClick">
      Make bulk assign request!
    </button>
    <p>Assign Task Response: {{ assignTaskResponse }}</p>
  </Container>
</template>

<style scoped>
code {
  background-color: lightgrey;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
