# 📬 Email Queue Processor using BullMQ and Redis

This project demonstrates a basic job queue system using **[BullMQ](https://docs.bullmq.io/)** for processing email jobs asynchronously. Redis is used as the message broker, and Docker is used to run Redis locally.

---

## 🚀 Features

* Queue-based job processing with **BullMQ**
* Simulated email sending with delay
* Redis connection using **ioredis**
* Dockerized Redis server
* Clean worker and producer architecture

---

## 🧱️ Project Structure

```
backend/
│
├── producer.js       # Adds email jobs to the queue
├── worker.js         # Processes email jobs from the queue
├── package.json
└── README.md
```

---

## 💠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Redis using Docker

```bash
docker run -itd -p 6379:6379 redis
```

> ⚠️ Make sure Docker is installed and running.

### 4. Run the Worker

```bash
node worker.js
```

### 5. Add a Job via Producer

```bash
node producer.js
```

---

## 🧪 Example Job Data

The producer script adds a job like:

```js
{ email: 'bhoomi@example.com' }
```

The worker simulates sending an email with a delay and logs the job progress.

---

## ⚙️ Redis Connection Configuration

Using `ioredis` with required BullMQ option:

```js
const connection = new IORedis({
  maxRetriesPerRequest: null,
});
```

---

## 📚 Resources

* [BullMQ Documentation](https://docs.bullmq.io/)
* [ioredis GitHub](https://github.com/luin/ioredis)
* [Docker Installation](https://docs.docker.com/get-docker/)

---

## 👩‍💻 Author

**Bhoomi Shakya**
🚀 Full-Stack Developer | AI-ML Enthusiast
📍 GLA University, Mathura

---

