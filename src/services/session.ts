// actions.ts
export const createSession = (email: string) => {
  if (typeof window !== "undefined") {
    document.cookie = `auth-token=${email}; path=/; max-age=86400`; //
    sessionStorage.setItem("currentUser", JSON.stringify({ email }));
  }
};

// Clear session cookie on logout
export const clearSession = () => {
  if (typeof window !== "undefined") {
    document.cookie = `auth-token=; path=/; max-age=0`; // Clear cookie
    sessionStorage.removeItem("currentUser");
  }
};
