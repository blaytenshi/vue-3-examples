const profiles = [
  { firstName: "Shirley", lastName: "Lui", email: "shirleyl@gmail.com" },
  { firstName: "Jimmy", lastName: "Tang", email: "jimmyt@gmail.com" }
];

export const fetchProfiles = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(profiles);
    }, 1000);
  });
};
