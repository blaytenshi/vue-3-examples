<script>
export default {
  data() {
    return {
      userList: [
        { label: 'Jimmy Tang' },
        { label: 'Shirley Lui' },
        { label: 'Ben Franzi' },
        { label: 'Danny Lai' }
      ],
      searchValue: '',
      filteredUserList: []
    }
  },
  methods: {
    handleSearchChange(event) {
      this.searchValue = event.target.value;

      this.filteredUserList = this.userList.filter(({ label }) => label.toLowerCase().includes(this.searchValue.toLowerCase()));
    }
  }
}
</script>

<template>
  <h1>Local List Searching</h1>
  <p>
    If we have a userList in data that is fetched asynchronously and then calculated with a computed property,
    should it reactively rerender when the computed property is passed to an inner component? Short answer, yes.
  </p>
  <label for="nameSearch">Name Search</label>
  <input
    v-bind="{
      id: 'nameSearch',
      name: 'nameSearch',
      type: 'text',
    }"
    @input="handleSearchChange"
  >
  <p>Search Value: {{ searchValue }}</p>
  <ul>
    <li
      v-for="user in filteredUserList"
      :key="user.label"
    >
      {{ user.label }}
    </li>
  </ul>
</template>