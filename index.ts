import Server from "./class/server";
import userRoutes from "./routes/usuarios";
import connection from "./bin/connectionMySQL";


// creando servidor web

const server = new Server();

server.start(() =>{
    console.log(`Servidor corriendo en puerto ${server.puerto} y en host ${server.host}`);
})


// Rutas app

server.app.use('/users', userRoutes);


// Conexión BBDD MySQL

connection.connect((error)=>{

    if(error){
        throw error
    }
    else{
        console.log(`App conectada a BBDD MySQL`)
    }
});