export class Logger{
    static log(message?: any){
        console.log(message);
    }

    static print(tag: string, message?: any){
        console.log(tag + '---> ' + message);
    }
}