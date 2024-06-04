-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "vitamin_id" TEXT NOT NULL,
    "fat_id" TEXT NOT NULL,
    "nutrient_id" TEXT NOT NULL,
    "mineral_id" TEXT NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mineral" (
    "id" TEXT NOT NULL,
    "calcium" TEXT NOT NULL,
    "magnesium" TEXT NOT NULL,
    "manganese" TEXT NOT NULL,
    "phosphor" TEXT NOT NULL,
    "iron" TEXT NOT NULL,
    "sodium" TEXT NOT NULL,
    "potassium" TEXT NOT NULL,
    "copper" TEXT NOT NULL,
    "zinc" TEXT NOT NULL,

    CONSTRAINT "mineral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutrient" (
    "id" TEXT NOT NULL,
    "moisture" TEXT NOT NULL,
    "energy_calorie" TEXT NOT NULL,
    "energy_joule" TEXT NOT NULL,
    "fiber" TEXT NOT NULL,
    "ashes" TEXT NOT NULL,
    "carbs" TEXT NOT NULL,
    "protein" TEXT NOT NULL,

    CONSTRAINT "nutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vitamin" (
    "id" TEXT NOT NULL,
    "vitamin_a" TEXT NOT NULL,
    "vitamin_b1" TEXT NOT NULL,
    "vitamin_b2" TEXT NOT NULL,
    "vitamin_b3" TEXT NOT NULL,
    "vitamin_b6" TEXT NOT NULL,
    "vitamin_c" TEXT NOT NULL,

    CONSTRAINT "vitamin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fat" (
    "id" TEXT NOT NULL,
    "total_fat" TEXT NOT NULL,
    "cholesterol" TEXT NOT NULL,
    "saturated" TEXT NOT NULL,
    "oil" TEXT NOT NULL,
    "omega3" TEXT NOT NULL,
    "trans" TEXT NOT NULL,

    CONSTRAINT "fat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consumed_food" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "food_id" TEXT NOT NULL,

    CONSTRAINT "consumed_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise_progress" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "calories" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "exercise_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weight_progress" (
    "id" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "weight_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_vitamin_id_fkey" FOREIGN KEY ("vitamin_id") REFERENCES "vitamin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_fat_id_fkey" FOREIGN KEY ("fat_id") REFERENCES "fat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_nutrient_id_fkey" FOREIGN KEY ("nutrient_id") REFERENCES "nutrient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_mineral_id_fkey" FOREIGN KEY ("mineral_id") REFERENCES "mineral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumed_food" ADD CONSTRAINT "consumed_food_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumed_food" ADD CONSTRAINT "consumed_food_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_progress" ADD CONSTRAINT "exercise_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weight_progress" ADD CONSTRAINT "weight_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
