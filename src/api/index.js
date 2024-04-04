const profiles = [
  { firstName: "Shirley", lastName: "Lui", email: "shirleyl@gmail.com" },
  { firstName: "Jimmy", lastName: "Tang", email: "jimmyt@gmail.com" },
  { firstName: "Ben", lastName: "Franzi", email: "benf@gmail.com" },
];

export const fetchProfiles = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(profiles);
  }, 1000);
});

const products = [
  { id: "a1b25ad4-0871-451b-b8d6-6a098af35fe2", name: "Tea" },
  { id: "27074872-7bc3-41e1-a35b-f070a4a47d2d", name: "Chocolate" },
  { id: "fe88b2c6-e674-4408-bca1-58b1080a10dc", name: "Chicken" },
];

export const fetchProducts = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 1200);
});

