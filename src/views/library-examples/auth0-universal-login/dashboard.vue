<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import simpleMiddleware from "@/services/simple-middleware.js";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

const auth0 = useAuth0();

const isAuthenticated = auth0.isAuthenticated;
const isLoading = auth0.isLoading;
const user = auth0.user;

const getUsers = async () => {
  try {
    const accessToken = await auth0.getAccessTokenSilently();

    console.log("isauth accesstoken", accessToken);

    const users = await simpleMiddleware.getUsers(accessToken);
    console.log("Users fetched successfully:", users);
  } catch (error) {
    console.error("Error getting users:", error);
  }
};

if (isAuthenticated) {
  getUsers();
}

const handleLogoutClick = () => {
  auth0.logout({
    logoutParams: {
      // must be a full URL and NOT a path! And must be set in auth0 Application of Allowed Logout URLs
      returnTo: "http://localhost:3030/losing-reactivity",
    },
  });
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Welcome to the Protected Dashboard</h1>
    <p>This is a part of the Auth0 example. This page should only show if the user is authorised.</p>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else>
      <div>Current user: {{ user ? user : 'None' }}</div>
      <button @click="handleLogoutClick">
        Logout!
      </button>
    </div>
  </Container>
</template>

<style scoped>

</style>
