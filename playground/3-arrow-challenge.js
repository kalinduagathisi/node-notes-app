const tasks = {
    tasks: [
        {
            text: "Grocery shopping",
            completed: true
        },
        {
            text: "Clean yard",
            completed: false
        },
        {
            text: "Film course",
            completed: false
        },
    ],

    getTasksToDo(){
        this.tasks.forEach((task) => {
            if (!task.completed){
                console.log("You've remaining task: " + task.text);
            }
        })
    }
}

tasks.getTasksToDo();