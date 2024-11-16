import { useEffect, useState } from "react";
import { DriverWithViolations } from "../types/datatypes";
import { PostgrestError } from "@supabase/supabase-js";
import supabase from "../utils/supabase";


export const useDrivers = () => {
  const [driversList, setDriversList] = useState<DriverWithViolations[] | undefined >([])
  const [error, setError] = useState<PostgrestError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      const { data, error } = 
      await supabase
      .from("Drivers")
      .select(`*, Violations (*)`);
      setLoading(false)
      console.log(data)

      if (error) {
        setError(error)
      } else if (data) {
        setDriversList(data);
      }
    };

    fetchDrivers()
  }, [])
  
  return {driversList, setDriversList, loading, error}
}
