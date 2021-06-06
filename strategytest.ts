//practical steps followed during implementation e.g stayclean innitiative project
/*
Sending notifications by;q
-Email
-Sms
-Push
-

*/


//Strategy/Strategies 
interface NotificationStrategy{
    notify();
//class slack & PushNotification are linking interface to  class NotificationSystem.
    class Slack implements NotificationStrategy{

        notify(){
            console.log("Notifications sent using the slack strategy....")
        }
    };

    class PushNotification implements NotificationStrategy{
        notify(){
            console.log("Notifications sent using the PushNotification strategy....")
        }
    };
}


//Context class / Composition
class NotificationSystem
{
    //the notify method , common in every strategy
    notify(){

    }
//we are using a setter to enable the read and  write functionality on our private class
    setNotificationStrategy(NotificationStrategyArg:NotificationStrategy){
        this.NotificationStrategy = NotificationStrategyArg; 
    }
}
// when is the deligation principle applied.
