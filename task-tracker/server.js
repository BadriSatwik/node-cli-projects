import fs from 'fs';

const file = "task.json";

if (!fs.existsSync(file))
    fs.writeFileSync(file, "[]");
let tasks = JSON.parse(fs.readFileSync(file) || "[]");

const Input = process.argv.slice(2);
const cmd = Input[0];

if (cmd === "add") {
    const addText = Input.slice(1).join(" ");
    const id = tasks.length + 1;

    tasks.push({
        id,
        description: addText,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    });

    fs.writeFileSync(file, JSON.stringify(tasks));
    console.log("Added:", id);
}

else if (cmd === "update") {
    const id = parseInt(Input[1]);
    const updateText = Input.slice(2).join(" ");

    const updatetask = tasks.find(x => x.id === id);

    if (!updatetask) {
        console.log("Not found");
        process.exit(0);
    }

    updatetask.description = updateText;
    updatetask.updatedAt = new Date().toISOString();

    fs.writeFileSync(file, JSON.stringify(tasks));
    console.log("Updated");
}

else if (cmd === "delete") {
    const id = Number(args[1]);
    tasks = tasks.filter(x => x.id !== id);

    fs.writeFileSync(file, JSON.stringify(tasks));
    console.log("Deleted");
}

else if (cmd === "mark-in-progress") {
    const id = Number(args[1]);

    const progressTask = tasks.find(x => x.id === id);
    if (!progressTask) {
        console.log("Not found");
        process.exit(0);
    }

    progressTask.status = "in-progress";
    progressTask.updatedAt = new Date().toISOString();

    fs.writeFileSync(file, JSON.stringify(tasks));
    console.log("Marked in-progress");
}

else if (cmd === "mark-done") {
    const id = Number(args[1]);

    const taskDone = tasks.find(x => x.id === id);
    if (!taskDone) {
        console.log("Not found");
        process.exit(0);
    }

    taskDone.status = "done";
    taskDone.updatedAt = new Date().toISOString();

    fs.writeFileSync(file, JSON.stringify(tasks));
    console.log("Marked done");
}

else if (cmd === "list") {
    const filter = args[1];

    const show = filter ? tasks.filter(x => x.status === filter) : tasks;

    if (show.length === 0){
        console.log("No tasks");
        process.exit(0);
    }

    show.forEach(x => console.log(x.id, "|", x.description, "|", x.status));
}

else {
    console.log(`
Commands:
node index.js add "task"
node index.js update <id> "new task"
node index.js delete <id>
node index.js mark-in-progress <id>
node index.js mark-done <id>
node index.js list
node index.js list todo
node index.js list in-progress
node index.js list done
`);
}