import { PrismaClient } from "@prisma/client";


// const client = (globalThis as any).prisma || new PrismaClient()
// if (process.env.NODE_ENV !== 'production') (globalThis as any).prisma = client
// declare global {
//     let prisma: PrismaClient;
// }

// let prisma : PrismaClient;

// if(process.env.NODE_ENV === 'production'){
//     prisma = new PrismaClient();
// }else{
//     if(!global.prisma as PrismaClient){
//         global.prisma  = new PrismaClient();
//     }

//     prisma = global.prisma
// }


// export default prisma;


const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma