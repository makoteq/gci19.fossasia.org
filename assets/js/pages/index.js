$(function () {
    $.ajax({
        type: 'get',
        url: 'https://gitlab.com/api/v4/projects/fossasia%2Fgci19-fossasia-org/repository/contributors',
        dataType: 'json',
        success: function (data) {
            // render contributors with mustache
            let content = Mustache.render($("#contributors-template").html(), {"contributors": data});
            // add rendered content inside <div id="contributors"> </div>
            $('#contributors').html(content);
        }
    })
});