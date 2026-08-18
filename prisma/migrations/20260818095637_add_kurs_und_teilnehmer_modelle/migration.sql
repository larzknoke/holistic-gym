-- CreateTable
CREATE TABLE "Kurs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "zeitraum" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "maxTeilnehmer" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aktiv" BOOLEAN NOT NULL DEFAULT true,
    "beendet" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Kurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teilnehmer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bestaetigt" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kursId" INTEGER NOT NULL,

    CONSTRAINT "Teilnehmer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kurs_url_key" ON "Kurs"("url");

-- CreateIndex
CREATE INDEX "Teilnehmer_kursId_idx" ON "Teilnehmer"("kursId");

-- AddForeignKey
ALTER TABLE "Teilnehmer" ADD CONSTRAINT "Teilnehmer_kursId_fkey" FOREIGN KEY ("kursId") REFERENCES "Kurs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
