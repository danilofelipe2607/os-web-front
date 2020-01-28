import jwt from "jsonwebtoken";

export const TOKEN_KEY = "Authorization";

export const isAuthenticated = () => {
  const decodedToken = jwt.decode(sessionStorage.getItem(TOKEN_KEY));

  if (decodedToken) {
    if (decodedToken.exp < new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
};

export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};
