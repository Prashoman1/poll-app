/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode, JwtPayload } from "jwt-decode";

export const decodedToken = (token: string) => {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  };