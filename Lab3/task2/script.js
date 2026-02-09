
        const taskInput = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const taskList = document.getElementById("taskList");

        addBtn.addEventListener("click", addTask);

        function addTask() {
            const text = taskInput.value.trim();
            if (text === "") return;

            // create elements
            const li = document.createElement("li");
            const taskDiv = document.createElement("div");
            const checkbox = document.createElement("input");
            const span = document.createElement("span");
            const deleteBtn = document.createElement("button");

            // setup elements
            checkbox.type = "checkbox";
            span.textContent = text;
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            taskDiv.className = "task";

            // events
            checkbox.addEventListener("change", () => {
                span.classList.toggle("done");
            });

            deleteBtn.addEventListener("click", () => {
                taskList.removeChild(li);
            });

            // build structure
            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(span);
            li.appendChild(taskDiv);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = "";
            taskInput.focus();
        }
    