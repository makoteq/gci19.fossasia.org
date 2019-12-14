$(function () {
    $.ajax({
        type: 'get',
        url: 'https://gitlab.com/api/v4/projects/fossasia%2Fgci19-fossasia-org/repository/contributors',
        dataType: 'json',
        success: function (data) {
            // render contributors with mustach e
            let content = Mustache.render($("#contributors-template").html(), {"contributors": data});
            // add rendered content inside <div id="contributors"> </div>
            $('#contributors').html(content);
        }
    })
});

$(function () {
    $.ajax({
        type: 'get',
        url: 'https://gitlab.com/api/v4/projects/fossasia%2Fgci19-fossasia-org/merge_requests',
        dataType: 'json',
        success: function (data) {
            var e = 0;
            var d = [];
            data.forEach( function(item) {
                if(e > 5){
                    return!1;
                }

                else
            {
                d[e]=item;
                e++;
            }
            
            }
            );
            // render contributors with mustache
            let content = Mustache.render($("#contribution-activity").html(), {"latest": d});
            // add rendered content inside <div id="latest"> </div>
            $('#latest').html(content);
        }
    })
});