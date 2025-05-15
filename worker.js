const { Worker } = require('bullmq');
const IORedis = require('ioredis');

// Create Redis connection
const connection = new IORedis({
    maxRetriesPerRequest: null, // ✅ REQUIRED by BullMQ
  });
  
  
// Fake email sending function
const sendEmail = () =>
  new Promise((res) => setTimeout(() => res(), 5 * 1000));

// Create worker for "email--queue"
const worker = new Worker('email--queue', async (job) => {
  console.log(`Message rec id: ${job.id}`);
  console.log(`Processing message`);
  console.log(`Sending email to ${job.data.email}`);
  await sendEmail();
  console.log('Email Sent');
}, { connection }); // 👈 Pass Redis connection here
