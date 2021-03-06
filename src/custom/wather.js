!(function(a) {
  a(document).ready(function() {
    var t = new Array();
    (t[0] = "Воскресенье"),
      (t[1] = "Понедельник"),
      (t[2] = "Вторник"),
      (t[3] = "Среда"),
      (t[4] = "Четверг"),
      (t[5] = "Пятница"),
      (t[6] = "Cуббота");
    var e = {
      FormatT: function(a) {
        var t = parseInt(a);
        return t > 0 ? "+" + a : a;
      },
      genIcon: function(a) {
        return (
          '<img src="https://www.gismeteo.ru/static/images/icons/new/' +
          a +
          '.png">'
        );
      },
      toDate: function(a) {
        var t = a.split("-");
        return new Date(t[0], t[1] - 1, t[2]);
      },
      createSmallWidget: function(t, i) {
        if (
          a(i)
            .find("day:eq(0) forecast:eq(0) values")
            .attr("icon")
        )
          var d = a(i)
              .find("day:eq(0) forecast:eq(0) values")
              .attr("icon"),
            r = a(i)
              .find("day:eq(0) forecast:eq(0) values")
              .attr("t");
        else
          var d = a(i)
              .find("day:eq(1) forecast:eq(0) values")
              .attr("icon"),
            r = a(i)
              .find("day:eq(1) forecast:eq(0) values")
              .attr("t");
        var n = e.FormatT(r),
          s =
            '           <div class="img">' +
            e.genIcon(d) +
          '</div>           <div class="temperature "><span>' +
            n +
          "<span></div>         ";
        a(t).append(s);
      },
      createBigWidget: function(i, d) {
        var r = a(d).find("day"),
          n = "",
          s = new Array();
        (s[0] = "Ночь"),
          (s[1] = "Утро"),
          (s[2] = "День"),
          (s[3] = "Вечер"),
          a(r).each(function(i) {
            var d = a(this).find("forecast"),
              r = e.toDate(a(this).attr("date")),
              c = t[r.getDay()],
              v = r.getDate(),
              o = "";
            a(d).each(function(t) {
              var i = a(this).attr("tod"),
                d = s[i],
                r = a(this)
                  .find("values")
                  .attr("icon"),
                n = a(this)
                  .find("values")
                  .attr("t"),
                c = a(this)
                  .find("values")
                  .attr("descr"),
                v =
                  '               <div class="weekday_h  clearfix tod_' +
                  i +
                  '">                 <div class="title"> ' +
                  d +
                  ': </div>                 <div class="icon">' +
                  e.genIcon(r) +
                  '</div>                 <div class="temperature">' +
                  e.FormatT(n) +
                  '</div>                 <div class="descr"><div class="cell">' +
                  c +
                  "</div></div>               </div>               ";
              o += v;
            });
            var l =
              '             <div class="weekday clearfix">               <div class="date_cont">                 <div class="date"> ' +
              v +
              ' </div>                 <div class="dayname"> ' +
              c +
              " </div>               </div>               " +
              o +
              "             </div>           ";
            n += l;
          });
        var c =
          '           <div class="forecast">             ' +
          n +
          "          </div>         ";
        a(i).append(c);
      }
    };
    //if this is a wather page
    if($('.big_wather_widget_container').length > 0) {
      a.get("/xml/all_widget/wather.xml", function(t) {
          //e.createSmallWidget(".wather_widget a", t),
          e.createBigWidget(".big_wather_widget_container", t),
          a(".weekday").click(function() {
            a(this).toggleClass("open");
          });
      });
    } 

  });
})(jQuery);

