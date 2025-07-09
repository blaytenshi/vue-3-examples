import simpleMiddlewareApi from "@/api/simple-middleware.js";

const assignTasks = async (taskList) => {
  try {
    const response = await simpleMiddlewareApi.post("/tasks/bulk-assign", { taskList });

    return response.data;
  } catch (error) {
    console.error("Error assigning tasks:", error);
    throw error;
  }
};

export default {
  assignTasks,
};
