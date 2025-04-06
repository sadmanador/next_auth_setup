import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.106:3000";

const registerUsers = async (payload: { email: string; password: string }) => {
  try {
    console.log("Payload:", payload)
    const response = await axios.post(`${BASE_URL}/api/user`, payload);
    return response.data;

  } catch (error) {
    console.error("Error registering user:", error);
    if (axios.isAxiosError(error) && error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Unknown error occurred");
  }
};

export default registerUsers;
