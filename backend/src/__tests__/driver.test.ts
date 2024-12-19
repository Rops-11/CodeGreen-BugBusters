import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  MockedFunction,
  Mock,
} from "vitest";
import request from "supertest";
import express from "express";
import router from "../routes/driver";
import { pool } from "..";

// Define the structure of the query result rows
type QueryResult = {
  rows: Array<{ id: number } | { first_name: string; last_name: string }>;
};

// Mock the database pool with a more specific type
vi.mock("../index", () => ({
  pool: {
    query: vi.fn() as MockedFunction<
      (text: string, values: unknown[]) => Promise<QueryResult>
    >,
  },
}));

const app = express();
app.use(express.json());
app.use(router);

describe("Drivers API", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test
  });

  describe("POST /add", () => {
    it("should return 200 if driver is added successfully", async () => {
      (pool.query as Mock).mockResolvedValueOnce({ rows: [{ id: 1 }] }); // Mock insert query response

      const response = await request(app).post("/add").send({
        email: "test@example.com",
        first_name: "John",
        last_name: "Doe",
        middle_name: "A",
        date_of_birth: "1990-01-01",
        sex: "M",
        driver_type: "regular",
        license_number: "123456789",
        license_expiration_date: "2025-01-01",
      });

      expect(response.status).toBe(200);
      expect(response.body.title).toBe("Driver Added!");
      expect(pool.query).toHaveBeenCalledTimes(1);
    });

    it("should return 500 if there is a server error", async () => {
      (pool.query as Mock).mockRejectedValueOnce(new Error("Database Error"));

      const response = await request(app).post("/add").send({
        email: "test@example.com",
        first_name: "John",
        last_name: "Doe",
        middle_name: "A",
        date_of_birth: "1990-01-01",
        sex: "M",
        driver_type: "regular",
        license_number: "123456789",
        license_expiration_date: "2025-01-01",
      });

      expect(response.status).toBe(500);
      expect(response.body.title).toBe("Server Error");
    });
  });

  describe("GET /get", () => {
    it("should return 200 if drivers are fetched successfully", async () => {
      (pool.query as Mock).mockResolvedValueOnce({
        rows: [
          {
            id: 1,
            first_name: "John",
            last_name: "Doe",
          },
          {
            id: 2,
            first_name: "Jane",
            last_name: "Smith",
          },
        ],
      });

      const response = await request(app).get("/get");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Smith",
        },
      ]);
    });

    it("should return 500 if there is an error fetching drivers", async () => {
      (pool.query as Mock).mockRejectedValueOnce(new Error("Database Error"));

      const response = await request(app).get("/get");

      expect(response.status).toBe(500);
      expect(response.body.title).toBe("Unknown Error");
    });
  });

  describe("PATCH /update", () => {
    it("should return 200 if driver is updated successfully", async () => {
      (pool.query as Mock).mockResolvedValueOnce({ rows: [{ id: 1 }] }); // Mock successful update

      const response = await request(app).patch("/update").send({
        id: 1,
        email: "test@example.com",
        first_name: "John",
        last_name: "Doe",
        middle_name: "A",
        date_of_birth: "1990-01-01",
        sex: "M",
        driver_type: "regular",
        license_number: "123456789",
        license_expiration_date: "2025-01-01",
      });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Successfully updated Driver: John Doe."
      );
    });

    it("should return 500 if there is an error updating the driver", async () => {
      (pool.query as Mock).mockRejectedValueOnce(new Error("Database Error"));

      const response = await request(app).patch("/update").send({
        id: 1,
        email: "test@example.com",
        first_name: "John",
        last_name: "Doe",
        middle_name: "A",
        date_of_birth: "1990-01-01",
        sex: "M",
        driver_type: "regular",
        license_number: "123456789",
        license_expiration_date: "2025-01-01",
      });

      expect(response.status).toBe(500);
      expect(response.body.title).toBe("Server Error");
    });
  });

  //   describe("DELETE /delete", () => {
  //     it("should return 200 if driver is deleted successfully", async () => {
  //       (pool.query as Mock)
  //         .mockResolvedValueOnce({ rowCount: 1, rows: [{ id: 1, first_name: "John", last_name: "Doe" }] }); // Mock deletion

  //       const response = await request(app).delete("/delete").send({
  //         id: 1,
  //       });

  //       expect(response.status).toBe(200);
  //       expect(response.body.message).toBe("Driver John, John Doe has been removed.");
  //     });

  //     it("should return 404 if driver is not found", async () => {
  //       (pool.query as Mock)
  //         .mockResolvedValueOnce({ rowCount: 0 }); // No driver found for deletion

  //       const response = await request(app).delete("/delete").send({
  //         id: 1,
  //       });

  //       expect(response.status).toBe(404);
  //       expect(response.body.title).toBe("Not Found");
  //     });

  //     it("should return 500 if there is a server error during deletion", async () => {
  //       (pool.query as Mock)
  //         .mockRejectedValueOnce( Error("Database Error"));

  //       const response = await request(app).delete("/delete").send({
  //         id: 1,
  //       });

  //       expect(response.status).toBe(500);
  //       expect(response.body.title).toBe("Server Error");
  //     });
  //   });
});
