const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const memberModel = {

    async findByEmail(email) {
        try {
            const foundEmail = await prisma.member.findUnique({
                where: {
                    email: email,
                },
            });
            return foundEmail;
        }catch (error) {
            console.log(error);
        }
    },

    async findAll() {
       try {
        const members = await prisma.member.findMany();
        return members;
       } catch(error) {
        console.log(error);
       }
         return null;
        },

        async insert(member) {
            try {
                const newMember = await prisma.member.create({
                    data: {
                        pseudo : member.pseudo,
                        email : member.email,
                        password : member.password,
                        role: member.role,
                    },
                });
                return newMember;
            }catch(error) {
                console.log(error);
            }
        } ,
        async findById(id) {
          
            try {
                const member = await prisma.member.findUnique({
                    where: {
                        id: id,
                    },
                });
                return member;
            }
            catch(error) {
                console.log(error);
            }
        },
        async update ( member){
          
            try{
             const updatedMember = await prisma.member.update({
                    where: {
                        id: member.id,
                    },
                    data: {
                        pseudo : member.pseudo,
                        email : member.email,
                        password : member.password,
                        role: member.role,
                    },
                });
                return updatedMember;
            }
            catch(error){
                console.log(error);
            }
    
            return null;
        },
        async delete(id){
       
            try{
               await prisma.member.delete({
                    where: {
                        id: id,
                    },
                });
    
           }catch(err){
                console.log(err);
            }
       
        }
       

    };

    module.exports = memberModel;