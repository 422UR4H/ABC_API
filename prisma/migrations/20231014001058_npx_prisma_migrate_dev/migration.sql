-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "cpfOrCpnj" VARCHAR(18) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "cep" VARCHAR(9) NOT NULL,
    "logradouro" VARCHAR(64) NOT NULL,
    "complemento" VARCHAR(64) NOT NULL,
    "bairro" VARCHAR(64) NOT NULL,
    "localidade" VARCHAR(64) NOT NULL,
    "uf" VARCHAR(4) NOT NULL,
    "ibge" VARCHAR(7) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_cpfOrCpnj_key" ON "profiles"("cpfOrCpnj");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_profileId_key" ON "addresses"("profileId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
