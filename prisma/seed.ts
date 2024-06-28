import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

async function seed() {
    const hashedPassword = await hash("Admin123", 12)
    const thomas = await prisma.users.create({
      data: {
        id: "thomas_n",
        name: "Thomas N",
        email: "thomas.n@compfest.id",
        phone: "08123456789",
        password: hashedPassword,
        role: "Admin",
      },
    })

    // Populate Services
    await prisma.services.createMany({
        data: [
            {
                name: "Haircuts and Styling",
                duration: 60
            },
            {
                name: "Manicure and Pedicure",
                duration: 60,
            },
            {
                name: "Facial Treatments",
                duration: 60,
            }
    ]
    }) 
}   

seed()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })