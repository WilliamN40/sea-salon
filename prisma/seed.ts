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

    //Populate Branches
    await prisma.branches.create({
        data: {
            name: "Main Branch",
            location: "Jawa Timur",
            openingtime: "09:00",
            closingtime: "21:00",
        }
    })
    // Populate Services
    await prisma.services.createMany({
        data: [
            {
                name: "Haircuts and Styling",
                duration: 1,
                branchId: 1
            },
            {
                name: "Manicure and Pedicure",
                duration: 1,
                branchId: 1
            },
            {
                name: "Facial Treatments",
                duration: 1,
                branchId: 1
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