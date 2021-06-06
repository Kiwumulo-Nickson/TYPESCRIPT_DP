var Logger = /** @class */ (function () {
    // Hidding the constructor from public access
    function Logger(username, password) {
        Logger.username = username;
        Logger.password = password;
    }
    // Only one user instance can exist at a time (Singleton)
    Logger.login = function (username, password) {
        if (Logger._loggedinUser != null) {
            return null;
        }
        Logger._loggedinUser = new Logger(username, password);
    };
    // Destroying the singleton
    Logger.logout = function () {
        Logger._loggedinUser = null;
    };
    Object.defineProperty(Logger, "loggedinUserInstance", {
        // Public getters / accessors of the user instance
        get: function () {
            return Logger._loggedinUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger, "loggedinUser", {
        get: function () {
            return Logger.username;
        },
        enumerable: false,
        configurable: true
    });
    // Data hidding
    Logger._loggedinUser = null;
    Logger.username = null;
    Logger.password = null;
    return Logger;
}());
Logger.login("senjack", "12345");
console.log(Logger.loggedinUser);
Logger.login("john", "52341");
console.log(Logger.loggedinUser);
Logger.logout();
Logger.login("jane", "53241");
console.log(Logger.loggedinUser);
Logger.login("senjack", "12345");
console.log(Logger.loggedinUser);
