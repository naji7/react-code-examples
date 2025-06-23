import { handleAxiosError } from "@/lib/utils";
import { useAuth } from "@/stores/auth";

export const loginUser = async () => {
  try {
    const token = "jaskdfnjsdkdMKS#jdflsdf";
    const user = {
      id: 1,
      email: "testuserone@mail.com",
      username: "testuserone",
    };

    // 1. we can set here using useAuth or else we can set it on login page
    useAuth.getState().login(token, user);
    return { token, user };
  } catch (error) {
    throw handleAxiosError(error, "Login failed");
  }
};
