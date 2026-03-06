import { createServer } from 'node:http';
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const addTask = () => {
    console.log("adding a task")
    

}


const updateTask = () => {
    console.log("updating a task")
}

const deleteTask = () => {
    console.log("deleting a task")
}
const progress = () => {
    console.log("Marking a task as in progress or done")
}

const ListAll = () => {
    console.log("Listing all tasks")
}

const ListDone = () => {
    console.log("Listing all tasks that are done")
}

const ListNotdone = () => {
    console.log("Listing all tasks that are not done")
}
const ListProgress = () => {
    console.log("Listing all tasks that are in progress")
}
const input = process.argv.slice(2)
console.log(input)

const text = args.slice(1).join(" ");
const id = tasks.length + 1;
tasks.push({
    id,
    description: text,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

//   {
//     "id": "001",
//     "description": "hello this is my first task",
//     "status": "progress",
//     "createdAt": "11 AM",
//     "updatedAt": "11 AM"
// }