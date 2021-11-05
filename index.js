// A new task will be created as incomplete
function newTask(title, description) {
  let task = {
    title,
    description,
    complete : false,
    logState : function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted : function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// function completeTask(task) {
//   task.complete = true;
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1,task2];
console.log(tasks);

task1.logState();
task1.markCompleted(); // Clean Cat Litter has not been completed
task1.logState(); // Clean Cat Litter has been completed
