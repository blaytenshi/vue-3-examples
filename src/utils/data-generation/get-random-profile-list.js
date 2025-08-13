import nameData from "./name-data.json";

const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const getRandomProfileList = (numberOfProfiles) => {
  // This is a trick for creating Arrays of items with a fixed length. The first param for the from() function takes in
  // an array-like or iterable object. By passing in an object with a length property, we can create an array of
  // that length.
  const randomProfiles = Array
    .from({ length: numberOfProfiles }, (_, index) => {
      const firstName = nameData[getRandomIntInclusive(0, nameData.length - 1)];
      const lastName = nameData[getRandomIntInclusive(0, nameData.length - 1)];

      return {
        id: `${firstName}-${lastName}-${index}`,
        firstName,
        lastName,
      };
    });

  return randomProfiles;
};

export default getRandomProfileList;
