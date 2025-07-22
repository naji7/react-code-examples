"use server";

export async function action(prevState: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const username = formData.get("username") as string;

  if (username.length < 3) {
    return {
      success: false,
      message: "Username must be at least 3 characters long",
    };
  }

  return {
    success: true,
    message: `User updated to ${username}`,
  };
}
