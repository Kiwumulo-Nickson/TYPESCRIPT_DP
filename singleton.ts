class Logger
{
    //private instance
    private static _loggedinUser:Logger=null;
    private static username:string;
    private static password:string;

        private constructor(usernameArg:string, passwordArg:string){
            Logger.username = usernameArg;
            Logger.password = passwordArg;
        }

        static login(usernameArg:string,passwordArg:string){
            if(Logger._loggedinUser!= null){
                return null
            }
            Logger._loggedinUser = new Logger(usernameArg,passwordArg);
                }

                static logout(){
                    Logger._loggedinUser = null;
                }

    //public Accessor
    static   loggedinUser(){
        return Logger._loggedinUser;
    }

    static   user(){
        return Logger.username;
    }

}

Logger.login("senjack","12345");
console.log(Logger.user());

Logger.login("johnDoe","12305");
console.log(Logger.user());