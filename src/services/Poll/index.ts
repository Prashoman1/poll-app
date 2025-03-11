"use server";

import { envConfig } from "../../config";
import { revalidateTag } from "next/cache";
import axiosInstance from "../../lib/AxiosInstance";

export const CreatePollApi = async (data: any) => {
  try {
    const response = await axiosInstance.post(`/poll/create`, data);
    revalidateTag("polls");
    return response.data;
  } catch (error) {
    return error;
  }
};
export const InsertAnswerPollApi = async (data: any, slug: string) => {
  try {
    const response = await axiosInstance.patch(`/polls/${slug}`, data);
    revalidateTag("polls");
    return response.data;
  } catch (error) {
    return error;
  }
};
export const InsertReactionPollApi = async (data: any, slug: string) => {
  try {
    const response = await axiosInstance.patch(
      `/polls-reactions/${slug}`,
      data
    );
    revalidateTag("polls");
    return response.data;
  } catch (error) {
    return error;
  }
};
export const InsertCommentPollApi = async (data: any, slug: string) => {
  try {
    const response = await axiosInstance.patch(`/polls-comment/${slug}`, data);
    revalidateTag("polls");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetPrivatePolls = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/pollsByUser/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetSinglePoll = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`/polls/${slug}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllPublicPolls = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["polls"],
      },
    };
    const res = await fetch(`${envConfig.apiUrl}/polls`, {
      ...fetchOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
