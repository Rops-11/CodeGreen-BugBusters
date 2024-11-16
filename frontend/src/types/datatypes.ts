import { Database } from "./database.types";

export interface Driver {
  date_of_birth: string; 
  driver_type: string; 
  email: string; 
  first_name: string; 
  id: string; 
  is_driver_registered: boolean; 
  last_name: string; 
  license_expiration_date: string; 
  license_number: string; 
  middle_name: string; 
  sex: string; 
  user_id: string | null;
}

export interface Violation {
  id: string;
  driver_id: string;
  violation_type: string;
  violation_date: string;
  paid_status: boolean;
}

export interface DriverWithViolations {
  date_of_birth: string; 
  driver_type: "Student" | "Faculty" | "Staff" | null; 
  email: string; 
  first_name: string; 
  id: string; 
  is_driver_registered: boolean; 
  last_name: string; 
  license_expiration_date: string; 
  license_number: string; 
  middle_name: string | null; 
  sex: "Male" | "Female"; 
  user_id: string | null;
  Violations: Violation[];
}

