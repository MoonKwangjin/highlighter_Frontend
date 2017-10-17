$(document).ready(function () {

    $('#addItem').on('click', addItem);
    $('#todos').on('change','.completeItem',completeItem);
    $('#todos').on('click','.checkItem',checkItem);
    $('#todos').on('click','.deleteItem',deleteItem);
    $('#todos').on('click','.todoText',startEditing);
    $('#todos').on('click','.saveItem',stopEditing);
    $('#newTodo').on('keypress', function (event) {
        if(event.which === 13){
            addItem();
            event.preventDefault();
        }
    });
    function startEditing(event) {
        var taskLi = $(this).parent();
        var currentText = taskLi.find('.todoText').text();
        taskLi.find('.editText').val(currentText);
        taskLi.find('.editText').show();
        taskLi.find('.saveItem').show();
        taskLi.find('.todoText').hide();
    }
    function stopEditing(event) {
        $(this).hide();
        var taskLi = $(this).parent();

        var newValue= taskLi.find('.editText').val();
        taskLi.find('.editText').hide();
        taskLi.find('.todoText').text(newValue);
        taskLi.find('.todoText').show();
    }
    function  addItem(event) {
        var newTodoText = $('#newTodo').val();
        if(newTodoText==="")
            alert("할일을 입력하시오!");
        else
            $('#todos').append('<li><input class="completeItem" type="checkbox"><span class="todoText"> '+ newTodoText +
                '</span><input type="text" class="editText"><button class="btn btn-success saveItem">save</button>' +
                '<span class="glyphicon glyphicon-trash deleteItem"></span></li>');
             $('#newTodo').val("");
    }
    function deleteItem(event) {
        $(this).parent().remove();
    }
    function checkItem(event) {
        $(this).parent().toggleClass('done');
    }
    function completeItem(event) {
        $(this).parent().toggleClass('done');
        $(this).parent().find('.checkItem').hide();
    }
});
/*
'<span class="glyphicon glyphicon-tree-deciduous checkItem"></span>
c[z
}*/
