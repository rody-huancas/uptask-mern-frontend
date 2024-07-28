import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { UserRegistrationForm } from "../types/index";

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const { data } = await api.post<string>("/auth/create-account", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
