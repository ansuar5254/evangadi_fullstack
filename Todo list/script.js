$(document).ready(function () {
    $("#addBtn").click(function () {

        let taskText = $("#taskInput").val().trim();

        if (taskText === "") {
            return;
        }

        let li = $("<li></li>");

        let span = $("<span></span>");
        span.text(taskText);

      
        let deleteBtn = $("<button></button>");

        deleteBtn.text("Delete");
        deleteBtn.addClass("delete-btn");

        li.append(span);
        li.append(deleteBtn);

        $("#taskList").append(li);
        $("#taskInput").val("");

        updateTaskCount();
    });

    $("#taskList").on("click", "span", function () {

        $(this).parent().toggleClass("completed");

        updateTaskCount();
    });

    $("#taskList").on("click", ".delete-btn", function () {

        $(this).parent().remove();

        updateTaskCount();
    });



    $("#clearBtn").click(function () {

        $("#taskList").empty();

        updateTaskCount();
    });

    function updateTaskCount() {

        let count = $("#taskList li:not(.completed)").length;

        $("#taskCount").text(count);
    }

});