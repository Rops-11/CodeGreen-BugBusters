import { useState } from "react";
import { BackendError } from "../../types/error.types";
import { Registration } from "../../types/datatypes";
import { fetchWithAuth } from "../../utils/fetch";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";

export const useAddRegistration = () => {
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState<boolean>(); // Track loading state
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  const postRegistration = async (formData: Registration) => {
    setLoading(true);

    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/registration/add",
        "POST",
        formData
      );

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError({ message: "An unexpected error occurred" } as BackendError);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };
  return { postRegistration, loading, setLoading, error };
};
export default useAddRegistration;
