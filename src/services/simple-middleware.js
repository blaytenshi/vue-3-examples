import simpleMiddlewareApi from "@/api/simple-middleware.js";
// import { getAccessToken } from "@/auth/auth0.js";

const assignTasks = async (taskList) => {
  try {
    const response = await simpleMiddlewareApi.post("/tasks/bulk-assign", { taskList });

    return response.data;
  } catch (error) {
    console.error("Error assigning tasks:", error);
    throw error;
  }
};

const getUsers = async (accessToken) => {
  try {
    // const accessToken = await getAccessToken();

    console.log("API", accessToken);

    const response = await simpleMiddlewareApi.get("/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default {
  assignTasks,
  getUsers,
};
