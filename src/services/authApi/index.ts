"use server";

import { cookies } from "next/headers";
import axiosInstance from "../../lib/AxiosInstance";

export const LoginApi = async (userData: any) => {
  try {
    const response = await axiosInstance.post("auth/login", userData);
    // console.log(response.data.token);
    const cookieStore = await cookies();
    cookieStore.set("token", response?.data?.token, { secure: true });
    return response.data;
  } catch (error:any) {
    throw error.response
    ? new Error(error.response.data.message || "Login failed")
    : new Error("Network error or API not reachable");
  }
};