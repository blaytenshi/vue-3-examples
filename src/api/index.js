const profiles = [
  { firstName: "Shirley", lastName: "Lui", email: "shirleyl@gmail.com" },
  { firstName: "Jimmy", lastName: "Tang", email: "jimmyt@gmail.com" }
];

export const fetchProfiles = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(profiles);
  }, 1000);
});
