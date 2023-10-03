-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);
