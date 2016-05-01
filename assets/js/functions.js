$.getJSON('assets/data/code-test.json', function (data) {
    data.sort(function (a, b) {
        return (b["apy"] > a["apy"]) ? 1 : ((b["apy"] < a["apy"]) ? -1 : 0);
    });

    var table = '<table id="rates_table">\
                  <tr>\
                   <td></td>\
                   <td>Annual Percentage Yield</td>\
                   <td>Est. earning for 1 Year*</td>\
                  </tr>';
    $.each(data, function (k, v) {
        table += "<tr><td>" + v.name + "</td><td>" + v.apy + " %</td><td>$" + v.earnings.toFixed(2) + "</td></tr>";
    });
    table += '<tr>\
               <td></td>\
               <td></td>\
               <td>*Based on $50,000 deposit.</td>\
              </tr>';
    $("#rates_table_container").html(table);
});


var $news_archive = $("#news_archive");
var $login_modal = $("#login_modal");

$news_archive.find('li').click(function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    var id = $(this).find('a').attr("href");
    $(".tab_content").removeClass("active");
    $(id).addClass("active");
});

$("#login_btn").click(function (e) {
    e.preventDefault();
    $login_modal.show();
});
$login_modal.find(".close_btn").click(function () {
    $login_modal.hide();
});