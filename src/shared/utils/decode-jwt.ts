import { jwtDecode, JwtPayload } from "jwt-decode";
import { getAccessToken } from "../../entities/services/auth-token.service";
import { IToken } from "./types";

export const decodeJwt = () => {
  const token = getAccessToken();
  if (!token) return null;
  try {
    const decodedJwt: IToken = jwtDecode(token);
    return decodedJwt;
  } catch (error) {
    console.error("Token decoding error", error);
    return null;
  }
};
