const {Queue} = require('bullmq') //it contains the queue; imported
const IORedis = require('ioredis');

const connection = new IORedis();
const notificationQueue = new Queue('email--queue', { connection });///queue is created 

async function init(){ // add in queue
    const res = notificationQueue.add('email to sia', {
        email:'siashakya509@gmail.com',
        subject:'welcome message',
        body:'hello sia, welcome to the platform'
    })
    console.log("response is added to queue");
}

init()


//producer produced the queue