import express from 'express';

class Server {

    public app: express.Application;
    public host:string = "localhost";
    public puerto:number = 3001;

    constructor(){
        this.app = express();
    }

    start(callback:any){
        this.app.listen(this.puerto, this.host, callback);
    }
}

export default Server;

