export const API_ROUTES = {
  register: {
    post: "/register",
  },
  login: {
    post: "/login",
  },
  users: {
    post: "/register",
    edit: "/users",
    get: (id) => `/users/${id}`,
    getAll: "/admin/users",
    patch: "/user",
    put: "/user",
  },
  products: {
    post: "/products",
    edit: "/products/:id",
    patch: "/products/:id",
    put: "/products/:id",
    get: (id) => {
      if (!id) {
        throw new Error("id", "id is required");
      }
      return `/products/${id}`;
    },
    getAll: "/products/:id",
  },
};
