test("a basic test example", function () {
    var value = "hello";
    equal(value, "hello", "We expect value to be hello");
});

function AssignNumber(x) {
    document.getElementById("marksnumber").value = x;
}

function AssignNumbertToMarkField() {
    var x = document.getElementById("addmarks").getElementsByTagName("*");
    for (i = 0; i < x.length; i++) {
        x[i] = arguments[i];
    }
}

test("Тест на добавление полей", function () {
    AssignNumber(4);
    equal(document.getElementById("marksnumber").value, 4);

    addMarkFields();
    var n = $('#addmarks').children().length;
    equal(n, 4, 'Добавлено 4 поля для ввода оценок');
});

test("Тест на получение средней оценки", function() {
    AssignNumber(4);
    addMarkFields();
    AssignNumbertToMarkField(1,3,4,4)
    
    equal(averageMark(), 3, "Среднее значение верное")
    
})
