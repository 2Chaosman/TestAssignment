test("a basic test example", function () {
    var value = "hello";
    equal(value, "hello", "We expect value to be hello");
});

function AssignNumber(x, id) {
    document.getElementById(id).value = x;
}

function AssignNumbertToMarkField() {
    var x = document.getElementById("addmarks").getElementsByTagName("*");
    for (i = 0; i < x.length; i++) {
        x[i].value = arguments[i];
    }
}

test("Тест на добавление полей", function () {
    AssignNumber(4, "marksnumber");
    equal(document.getElementById("marksnumber").value, 4);

    addMarkFields();
    var n = $('#addmarks').children().length;
    equal(n, 4, 'Добавлено 4 поля для ввода оценок');
});

test("Тест на получение средней оценки", function () {
    AssignNumber(4, "marksnumber");
    addMarkFields();
    AssignNumbertToMarkField(1, 3, 4, 4);

    equal(averageMark(), 3, "Среднее значение верное");
})

test("Тест выставления оценки", function () {
    var x = '<p style="color:green; font-weight:bold">Результат: Зачтено</p>';
    var y = '<p style="color:red; font-weight:bold">Результат: Незачтено</p>';

    toGrade();
    equal(document.getElementById("result").innerHTML, x, "Оценка 'Зачтено' выставлена успешно")
    equal(document.getElementById("result").innerHTML, y, "Оценка 'Незачтено' выставлена успешно")
        //Результат всегда будет "Незачтено", так как при
        //выполнение функции в поле Количество занятий будет 0. Следовательно условие miss <= 10 && average >= 4 будет всегда возвращать false.

})