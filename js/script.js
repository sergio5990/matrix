$(document).ready(function () {

    //забираем данные из формы
    $('form').submit(function () {
        var size = parseInt($("#size").val())  + 1;
        var a = [];
        var $table = $('table');
        var strtable = "<table>";
        var i, j, k, cnt;

        // создаем двумерный массив
        for (var i = 1; i < size; i++) {
            a[i] = [];
        }

        // заполняем
        cnt = 1;
        var n = size;
        for (k = 1; k < n; k++) {

            for (j = k; j < n - k + 1; j++, cnt++) {
                a[k][j] = cnt;
            }

            for (j = k + 1; j < n - k + 1; j++, cnt++) {
                a[j][n - k] = cnt;
            }

            for (j = n - k - 1; j > k; j--, cnt++) {
                a[n - k][j] = cnt;
            }

            for (j = n - k; j > k; j--, cnt++) {
                a[j][k] = cnt;
            }
        }

        // выводим массив в таблицу
        for (var i = 1; i < size; i++) {
            strtable = strtable + "<tr>"
            for (var j = 1; j < size; j++) {
                strtable = strtable + "<td style='text-align:center'> " + a[i][j] + " </td>"
            }
            strtable = strtable + "</tr>"
        }

        // и на страницу
        $table.html(strtable);
    });

});