test("a basic test example", function () {
    var value = "hello";
    equal(value, "hello", "We expect value to be hello");
});

function AssignNumber(x) {
    document.getElementById("marksnumber").value = x;
}

test("Тест на добавление полей", function () {
    AssignNumber(4);
    equal(document.getElementById("marksnumber").value, 4);

    addMarkFields();
    var n = $('#addmarks').children().length;
    equal(n, 4, 'Добавлено 4 поля для ввода оценок');
});