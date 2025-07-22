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

const getProductsExportCsv = async () => {
  try {
    // responseType: "blob" is used to tell axios to treat the response as a binary file instead of transforming it
    // into JSON or text. You don't need to tell the API to send the response as a blob. This is for axios only.
    const response = await simpleMiddlewareApi.get(
      "/products/export-csv",
      { responseType: "blob" },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching products export CSV:", error);
    throw error;
  }
};

export default {
  assignTasks,
  getUsers,
  getProductsExportCsv,
};
