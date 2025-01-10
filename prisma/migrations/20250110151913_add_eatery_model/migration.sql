-- CreateTable
CREATE TABLE "Eatery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Eatery_pkey" PRIMARY KEY ("id")
);
