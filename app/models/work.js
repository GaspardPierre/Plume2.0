const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const workModel = {

    async findByTitle(title) {
        try {
            const foundTitle = await prisma.work.findFirst({
                where: {
                    title
                },
            });
            return foundTitle;
            
        } catch (error) {
            console.log(error);
            
        }
    },

    async findAll() {
        try {
            const works = await prisma.work.findMany();
            return works;
            
      
            
        } catch (error) {   
            console.log(error);
            
        }
        return null;
    },

    async insert (work) {
        try {
            const newWork = await prisma.work.create({
                data: {
                    content: work.content,
                    author : work.author,
                    title: work.title,
                    member_id: work.member_id,
                },
            });
            return newWork;
            
            
        } catch (error) {
            console.log(error);
            
        }
    
},

async findById(id) {
    let work;
    try {
        const work = await prisma.work.findUnique({
            where: {
                id: id,
            },
        });
        return work;
        
    } catch (error) {
        console.log(error);
        
    }
    
},

async delete(id) {

    try {
       await prisma.work.delete({   
            where: {
                id: id,
            },
        });
    } catch (error) {
        console.log(error);
        
    }
}

};

module.exports =workModel;

