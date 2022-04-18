export const API_ROUTES = {
  register: {
    post: "/auth/register",
  },
  login: {
    post: "/auht/login",
  },
  user: {
    post: "/auth/register",
    edit: "/users",
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
