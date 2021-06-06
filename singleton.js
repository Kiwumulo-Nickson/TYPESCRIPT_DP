var Logger = /** @class */ (function () {
    function Logger(usernameArg, passwordArg) {
        Logger.username = usernameArg;
        Logger.password = passwordArg;
    }
    Logger.login = function (usernameArg, passwordArg) {
        if (Logger._loggedinUser != null) {
            return null;
        }
        Logger._loggedinUser = new Logger(usernameArg, passwordArg);
    };
    Logger.logout = function () {
        Logger._loggedinUser = null;
    };
    //public Accessor
    Logger.loggedinUser = function () {
        return Logger._loggedinUser;
    };
    Logger.user = function () {
        return Logger.username;
    };
    //private instance
    Logger._loggedinUser = null;
    return Logger;
}());
Logger.login("senjack", "12345");
console.log(Logger.user());
Logger.login("johnDoe", "12305");
console.log(Logger.user());
