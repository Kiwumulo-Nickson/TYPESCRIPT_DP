
class Logger
{
    // Data hidding
    private static _loggedinUser: Logger  = null;
    private static username = null;
    private static password = null;

    // Hidding the constructor from public access
    private constructor(username:string, password:string){
        Logger.username = username;
        Logger.password = password;
    }

    // Only one user instance can exist at a time (Singleton)
    static login(username:string, password:string){
        if(Logger._loggedinUser != null){
            return null
        }
        Logger._loggedinUser = new Logger(username, password)
    }

    // Destroying the singleton
    static logout(){
        Logger._loggedinUser = null;
    }

    // Public getters / accessors of the user instance
    static get loggedinUserInstance(){
        return Logger._loggedinUser
    }
    
    static get loggedinUser(){
        return Logger.username
    }
}

Logger.login("senjack", "12345");
console.log(Logger.loggedinUser);
Logger.login("john", "52341");
console.log(Logger.loggedinUser);
Logger.logout();
Logger.login("jane", "53241");
console.log(Logger.loggedinUser);
Logger.login("senjack", "12345");
console.log(Logger.loggedinUser);
