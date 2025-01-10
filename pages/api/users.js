import prisma from "@/lib/db"; // Import prisma client untuk akses ke database

// Handler untuk menangani GET dan POST
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Mengambil semua data user
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else if (req.method === "POST") {
    const { name, email, password } = req.body;

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Membuat user baru
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
