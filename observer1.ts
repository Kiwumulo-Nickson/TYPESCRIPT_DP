
// Observer
interface Subscriber
{
    receiveUpdates(updates:object):void;
}

class UrbanSubscriber implements Subscriber
{
    name:string;
    receiveUpdates(updates:object){
        console.log(this.name);        
        console.log(updates);       
    }
}

class LocalSubscriber implements Subscriber
{
    name:string;
    receiveUpdates(updates:object){
        console.log(this.name);        
        console.log(updates);       
    }
}

// Observable
class NewsPublisher
{
    /*
        - Internal Main State (Main state).
        - List or collection of Observers.
        - A mechanism for adding an Observer to the list of Observers.
        - A mechanism for removing and Observer from the list of Observers.
        - A mechanism for notifying all observers, of the Observable internal state change.
        - A mechanism for triggering the notification of all observers, of the Observable internal state change.
        - A mechanism for causing the change in state of the Observable.
    */
   private state: Object;
   private subscribers: Array<Subscriber> = [];

   subscribe(subscriber: Subscriber){
       this.subscribers.push(subscriber);
   }

   unsubscribe(subscriber: Subscriber){
    //this.subscribers.push(subscriber);
    }

    private notify(){
        for (let subscriber of this.subscribers){
            subscriber.receiveUpdates(this.state)
        }
    }

    private startNotification(){
        this.notify()
    }

    publish(content: object){
        this.state = content;
        this.startNotification();
    }

}


// Testing

let NewVision = new NewsPublisher();

let subscriber1 = new UrbanSubscriber();
let subscriber2 = new UrbanSubscriber();
let subscriber3 = new UrbanSubscriber();
let subscriber4 = new UrbanSubscriber();
subscriber1.name = "Akena Farel";
subscriber2.name = "Okoth Hamphrey";
subscriber3.name = "Hazel";
subscriber4.name = "Mbabazi Suzan";

NewVision.subscribe(subscriber1);
NewVision.subscribe(subscriber2);
NewVision.subscribe(subscriber3);
NewVision.subscribe(subscriber4);

NewVision.publish({
    heading: "Software developer turn Preacher",
    Body: "dbgb/m,fgbmgb,fbm,fb,dfgb;m,fbm,fnfgnfgn"
});

NewVision.publish({
    heading: "Lived for Donkey Years",
    Body: "dbgb/m,fgbmgb,fbdbdfnfhmfgc sdvvs.bsbsz"
});



let subscriber5 = new LocalSubscriber();
let subscriber6 = new LocalSubscriber();
subscriber5.name = "Daniel Okello";
subscriber6.name = "John Doe";

let Bukedde = new NewsPublisher();
Bukedde.subscribe(subscriber5);
Bukedde.subscribe(subscriber6);

Bukedde.publish(
    {
        Omutwe: "Efujjooooo!!!!!!!",
        ebisingawo:"cvbdfbdbsm,b sv,/fvsfbsdsb sdb, bab"
    }
)
