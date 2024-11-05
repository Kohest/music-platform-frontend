import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export function clearExpiredToken() {
  const token = Cookies.get("accessToken");
  if (token) {
    try {
      const { exp } = jwtDecode(token);
      if (exp && exp * 1000 < Date.now()) {
        Cookies.remove("accessToken");
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
      Cookies.remove("accessToken");
    }
  }
}
