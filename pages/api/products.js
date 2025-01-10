// /pages/api/products.js

import prisma from "@/lib/db";

export default async function handler(req, res) {
  try {
    const products = await prisma.product.findMany();
    console.log("Fetched products:", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
