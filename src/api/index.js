const resolveWith = (resolveWith, resolveTime) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(resolveWith);
  }, resolveTime);
});


const profiles = [
  { firstName: "Shirley", lastName: "Lui", email: "shirleyl@gmail.com" },
  { firstName: "Jimmy", lastName: "Tang", email: "jimmyt@gmail.com" },
  { firstName: "Ben", lastName: "Franzi", email: "benf@gmail.com" },
];

const products = [
  { id: "1", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "2", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "3", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "4", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "5", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "6", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "7", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "8", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "9", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "10", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "11", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "12", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "13", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "14", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "15", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "16", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "17", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "18", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "19", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "20", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "21", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "22", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "23", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "24", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "25", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "26", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "27", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "28", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "29", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "30", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "31", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "32", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "33", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "34", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "35", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "36", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "37", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "38", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "39", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "40", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "41", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "42", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "43", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "44", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "45", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
  { id: "46", name: "Black Tea", brand: "Lipton", qty: 100, price: 3.5, category: "beverages" },
  { id: "47", name: "Hazelnut Chocolate", brand: "Lindt", qty: 50, price: 5.00, category: "confectionary" },
  { id: "48", name: "Roast Chicken", brand: "Coles", qty: 7, price: 9.99, category: "poultry" },
  { id: "49", name: "Broccoli", brand: "Coles", qty: 10, price: 3.99, category: "vegetables" },
  { id: "50", name: "Protein Powder", brand: "Optimum Nutrition", qty: 40, price: 50.0, category: "health_vitamins" },
];

const ITEM_CATEGORY = {
  "products": products,
  "profiles": profiles,
};

const getItemsWithPagination = (itemCategory, page, pageSize) => {
  if (!Object.keys(ITEM_CATEGORY).includes(itemCategory)) {
    throw `Invalid Item Category ${itemCategory}`;
  }

  const itemOffsetFrom = page * pageSize;

  const itemOffsetTo = itemOffsetFrom + pageSize;

  const items = ITEM_CATEGORY[itemCategory].slice(itemOffsetFrom, itemOffsetTo);

  return {
    results: items,
    page,
    pageSize,
    totalResults: ITEM_CATEGORY[itemCategory].length,
  };
};

export const fetchProfiles = () => resolveWith(profiles, 1000);
export const fetchProducts = () => resolveWith(products, 1200);
export const fetchPaginatedItems = (itemCategory, page, pageSize) => resolveWith(getItemsWithPagination(itemCategory, page, pageSize), 1000);

