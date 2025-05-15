<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import Container from "@/components/Container.vue";

const auth0 = useAuth0();

const isAuthenticated = auth0.isAuthenticated;
const isLoading = auth0.isLoading;
const user = auth0.user;

const handleLoginClick = () => {
  auth0.loginWithRedirect();
};

const handleLogoutClick = () => {
  auth0.logout();
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Auth0 Universal Login</h1>
    <p>This Auth0 Universal Login integration. It connects to an actual Auth0 instance owned by me.</p>
    <p>
      This application should keep a person logged in even if the user refreshes the page as it should
      silently reauth itself over an iframe.
    </p>
    <p>
      If you refresh the page and you are suddenly logged out. Try allowing third party cookies or (if
      you're using the Brave browser) turn the Brave Shields down.
    </p>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else>
      <div>Current user: {{ user ? user : 'None' }}</div>
      <button
        v-if="!isAuthenticated"
        @click="handleLoginClick"
      >
        Login with Auth0 Universal Login!
      </button>
      <button
        v-else
        @click="handleLogoutClick"
      >
        Logout!
      </button>
    </div>
  </Container>
</template>

<style scoped>

</style>
