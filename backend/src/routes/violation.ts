import express, { Request, Response } from "express";
import { pool } from "..";
import { Violation } from "../types/datatypes";

const router = express();

router.post("/add", async (req: Request, res: Response) => {
  try {
    const {
      driver_id,
      violation_type,
      violation_date,
      description,
    }: Violation = req.body;

    const { rows: drivers } = await pool.query(
      `SELECT *
        FROM drivers
        WHERE id = $1`,
      [driver_id]
    );

    const driverFound = await drivers[0];

    if (!driverFound) {
      res
        .status(404)
        .json({ title: "No Driver Found", message: "Driver is not found." });
      return;
    }

    console.log("THIS IS THE DRIVER FROM VIOLATION");
    console.log(driverFound);

    const violations = await pool.query(
      `INSERT INTO violations (
          driver_id,
          violation_type,
          violation_date,
          description
          )
          VALUES($1, $2, $3, $4)`,
      [driver_id, violation_type, violation_date, description]
    );

    console.log(violations.rows[0]);

    res.status(200).json({
      title: "Violation Added!",
      message: `Violation has been added for ${driverFound.first_name} ${driverFound.last_name}, ${violation_type}.`,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error:", errorMessage);
    res.status(500).json({ title: "Error", message: errorMessage });
  }
});

router.patch("/update", async (req: Request, res: Response) => {
  const { id, ...updates } = req.body;

  if (!id) {
    res.status(400).json({
      title: "Validation Error",
      message: "Driver ID is required to update the record.",
    });
    return;
  }

  const fields = Object.keys(updates);
  const values = Object.values(updates);

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");

  const query = `UPDATE violations SET ${setClause}
         WHERE id = $${fields.length + 1} 
         RETURNING *`;

  const result = await pool.query(query, [...values, id]);

  if (result.rowCount === 0) {
    res.status(404).json({
      title: "Not Found",
      message: "Violations with the specified ID does not exist.",
    });
    return;
  }

  const updateViolation = result.rows[0];
  console.log("Violations updated successfully:", updateViolation);

  res.status(200).json({
    title: "Violation Updated!",
    message: `Violation has been updated successfully.`,
  });
});

router.delete("/delete", async (req: Request, res: Response) => {
  try {
    console.log("Fetching. . .");

    const { violationId } = req.body;

    const violations = await pool.query(
      `DELETE FROM 
            violations 
            WHERE 
            id = $1 
            RETURNING *`,
      [violationId]
    );

    if (violations.rowCount === 0) {
      res
        .status(404)
        .json({ message: "Cannot find and delete the violation." });
      return;
    }

    res.status(200).json({
      title: "Violation Deleted",
      message: "Violation Deleted Successfully.",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
