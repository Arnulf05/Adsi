import mongoose from 'mongoose'

const dbconection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNX, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            userCreateIndex:true,
            userFindAndModify:false
        });//esto es una llamada a un servicio de tercero, nos envian algunos warning        
        
        console.log('base de datos online');
    } catch (error) {
        throw new Error('Error al iniciar la base de datos')
    }
}
//Archivivo necesario para conecion hacia la base de datos

export default dbconection