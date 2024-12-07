import { useState } from "react";
import { toast } from "react-toastify";
import { fetchWithAuth } from "../../utils/fetch"; // Custom fetch utility
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";

export const useApproveRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  const approveRegistration = async (licenseNumber: string): Promise<void> => {
    if (!licenseNumber) {
      toast.error("License number is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/registration/approve",
        "POST",
        { license_number: licenseNumber }
      );

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to approve registration.");
        return;
      }

      const data = await response.json();
      toast.success(data.message || "Registration approved successfully!");
    } catch (error) {
      console.error("Error approving registration:", error);
      toast.error(
        "Network error occurred. Could not connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return { approveRegistration, loading };
};