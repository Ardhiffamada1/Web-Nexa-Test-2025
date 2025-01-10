import prisma from "@/lib/db"; // Ensure this is properly set up

export default async function handler(req, res) {
  try {
    const eatery = await prisma.eatery.findMany();

    if (eatery.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(eatery);
  } catch (error) {
    console.error("Error fetching eatery:", error);
    return res.status(500).json({
      error: "Failed to fetch eatery",
      details: error.message || "Unknown error",
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
