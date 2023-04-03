$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="krit-1.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }
    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,
                callback: function () {
                    setTimeout(function () {
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">day</option>' +
                                (function () {
                                    for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                    return n;
                                })() +
                                '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">month</option>' +
                                ($.each(e.DateBirthday[0].month, function (e, t) {
                                    o += '<option value="' + (e + 1) + '">' + t + "</option>";
                                }),
                                o) +
                                '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">year</option>' +
                                (function () {
                                    for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                    return r;
                                })() +
                                "</select></div></div></form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                    0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.year]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        callback: function () {
                                            var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }
    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
    console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text:
                    "Hello! I am<b style='color: rgb(134, 144, 254);'>Hanz Cua</b>!<br><br>Những dự đoán " +
                    ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")), monthA[p.getMonth()]) +
                    " của tôi khiến người Thái cả nước choáng váng 3 cung hoàng đạo sẽ bắt đầu kiếm được nhiều tiền hơn trong khi 2 cung hoàng đạo sẽ hết sạch tiền.",
            },
            { text: "Bạn là Nam hay Nữ", m: { text: "Nam" }, w: { text: "Nữ" } },
            { text: "Bạn sinh ra khi nào?" },
        ]),
        (e.userZodiak = [{ text: "Cảm ơn! Theo tử vi của bạn, bạn là - <p>{zodie}</p>. <p class='hidden-zodie' style='display: none'>{zodie}</p>" }]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {
                            text:
                                "cung hoàng đạo \"<b>{zodie}</b>\" Sẽ có một cuộc cách mạng tài chính trong tương lai gần. Nhưng bây giờ vận may tài chính của bạn đang ở mức thấp nhất. Bạn phủ nhận bản thân nhiều điều. Các khoản nợ đang ám ảnh bạn Theo tử vi, bạn có xu hướng đẩy tiền tài và vận may ra khỏi cuộc sống của mình.",
                        },
                        { text: "Bạn sẽ không thể thoát khỏi tình trạng tồi tệ này trong năm tới nếu bạn không đưa ra những lựa chọn đúng đắn, điều này chắc chắn sẽ dẫn đến một cuộc cách mạng tài chính." },
                        { text: "Nếu bạn muốn chấm dứt nghèo đói vào năm 2023, bạn cần lắng nghe kỹ những gì tôi sắp nói với bạn." },
                        {
                            text:
                                "tôi có thể thấy rõ rằng Bạn sẽ có cơ hội thay đổi hướng được đưa ra trong" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January,February,March,April,May,June,July,August,September,October,November,December".split(",")), monthA[p.getMonth()]) +
                                " Đây sẽ là thời điểm tuyệt vời để thay đổi cuộc đời bạn từ bất hạnh thành may mắn cho đến cuối đời.",
                        },
                        { text: "Không có gì trong cuộc sống của bạn xảy ra một cách tình cờ. \"<b>{zodie}</b>\" Dễ bị tổn thương bởi năng lượng xấu Bạn sẽ phải tự bảo vệ mình và thu hút tiền may mắn trên đường đi." },
                    ],
                    [
                        { text: "<b>Làm thế nào để thu hút tiền tài và vận may cho cung hoàng đạo của bạn trong năm 2023?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "Đây sẽ là cơ hội cuối cùng để thay đổi vận mệnh của bạn trong năm 2023 nếu bạn bỏ lỡ bùa hộ mệnh này. Cuộc sống của bạn sẽ tiếp tục như vậy. Bạn là người phải đưa ra quyết định!" },
                        { text: "Tôi sẽ giúp bạn thu hút tiền tài và vận may đến với cung hoàng đạo của bạn trong năm 2023. Nếu bạn đồng ý, bạn sẽ quên điều đó đi. thế nào là nghèo Tôi sẽ giải phóng tài sản bị giam cầm của bạn cho bạn." },
                        { text: "Tôi sẽ tạo ra một bùa hộ mệnh đặc biệt cho bạn. Tôi sẽ đặt sức mạnh vào chiếc bùa hộ mệnh bằng một câu thần chú sẽ rút cạn năng lượng đen tối của bạn." },
                        {text: " <br> <img width='200px' src='img/product.jpg'> </br> Bùa hộ mệnh trông như thế này: "},
                        { text: "Tại sao bạn cần bùa hộ mệnh này?" },
                        { text: "Bùa hộ mệnh này sẽ thay đổi hoàn toàn cuộc sống của bạn chỉ trong một tháng. Tất cả các khoản nợ của bạn đã biến mất. Tiền sẽ đến với bạn từ nhiều kênh khác nhau. Và bạn sẽ có thể quên đi những thất bại tài chính. Và sẽ có tiền cho đến hết đời."},
                        {
                            text:
                                'Tôi luôn cố gắng giúp mọi người giải quyết vấn đề. Và tôi không bao giờ kiếm được lợi nhuận từ việc làm như vậy. Chính vì thế cho đến tháng' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December.".split(",")), monthA[p.getMonth()]) + ' You will receive a 50% discount on the amulet. The price for you will be <b>' +
                                '1290' +
                                '</b> <b>' +
                                '฿' +
                                " only </b>",
                        },
                        {text: "Bạn có thể đặt một chiếc bùa hộ mệnh ngay bây giờ! Chỉ cần nhập tên và số điện thoại của bạn vào mẫu. và cuộc sống của bạn sẽ thay đổi Tôi hứa với bạn!<br><br> "}
                    ],
                ],
            ],
            m: [
                [
                    [
                        {
                            text:
                                "zodiac \"<b>{zodie}</b>\" Sẽ có một cuộc cách mạng tài chính trong tương lai gần. Nhưng bây giờ vận may tài chính của bạn đang ở mức thấp nhất. Bạn phủ nhận bản thân nhiều điều. Các khoản nợ đang ám ảnh bạn Theo tử vi, bạn có xu hướng đẩy tiền tài và vận may ra khỏi cuộc sống của mình.",
                        },
                        { text: "Bạn sẽ không thể thoát khỏi tình trạng tồi tệ này trong năm tới nếu bạn không đưa ra những lựa chọn đúng đắn, điều này chắc chắn sẽ dẫn đến một cuộc cách mạng tài chính." },
                        { text: "Nếu bạn muốn chấm dứt nghèo đói vào năm 2023, bạn cần lắng nghe cẩn thận những gì tôi đang nói với bạn." },
                        {
                            text:
                                "tôi có thể thấy rõ rằng Bạn sẽ có cơ hội thay đổi hướng được đưa ra trong" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December.".split(",")), monthA[p.getMonth()]) +
                                " Đây sẽ là thời điểm tuyệt vời để thay đổi cuộc đời bạn từ bất hạnh thành may mắn cho đến cuối đời.",
                        },
                        { text: "Không có gì trong cuộc sống của bạn xảy ra một cách tình cờ. \"<b>{zodie}</b>\" Dễ bị tổn thương bởi năng lượng xấu Bạn sẽ phải tự bảo vệ mình và thu hút tiền may mắn trên đường đi." },
                    ],
                    [
                        { text: "<b>Cách thu hút tiền và tài lộc cho cung hoàng đạo của bạn vào năm 2023?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "Đây sẽ là cơ hội cuối cùng để thay đổi vận mệnh của bạn trong năm 2023 nếu bạn bỏ lỡ bùa hộ mệnh này. Cuộc sống của bạn sẽ tiếp tục như vậy. Bạn là người phải đưa ra quyết định!" },
                        { text: "Tôi sẽ giúp bạn thu hút tiền tài và vận may đến với cung hoàng đạo của bạn trong năm 2023. Nếu bạn đồng ý, bạn sẽ quên điều đó đi. thế nào là nghèo Tôi sẽ giải phóng tài sản bị giam cầm của bạn cho bạn." },
                        { text: "Tôi sẽ tạo ra một bùa hộ mệnh đặc biệt cho bạn. Tôi sẽ đặt sức mạnh vào chiếc bùa hộ mệnh bằng một câu thần chú sẽ rút cạn năng lượng đen tối của bạn." },
                        {text: " <br> <img width='200px' src='img/product.jpg'> </br> Bùa hộ mệnh trông như thế này: "},
                        { text: "Tại sao bạn cần bùa hộ mệnh này?" },
                        { text: "Bùa hộ mệnh này sẽ thay đổi hoàn toàn cuộc sống của bạn chỉ trong một tháng. Tất cả các khoản nợ của bạn đã biến mất. Tiền sẽ đến với bạn từ nhiều kênh khác nhau. Và bạn sẽ có thể quên đi những thất bại tài chính. Và sẽ có tiền cho đến hết đời."},
                        {
                            text:
                                'Tôi luôn cố gắng giúp mọi người giải quyết vấn đề. Và tôi không bao giờ kiếm được lợi nhuận từ việc làm như vậy. Chính vì thế cho đến tháng ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December.".split(",")), monthA[p.getMonth()]) + ' Bạn sẽ được giảm giá 50% cho bùa hộ mệnh. Giá cho bạn sẽ là <b>' +
                                '1290' +
                                '</b> <b>' +
                                '฿' +
                                " only </b>",
                        },
                        {text: "Bạn có thể đặt một chiếc bùa hộ mệnh ngay bây giờ! Chỉ cần nhập tên và số điện thoại của bạn vào mẫu. và cuộc sống của bạn sẽ thay đổi Tôi hứa với bạn!<br><br> "}
                    ],
                ],
            ],
        }),
        (e.socNumber = [
            {
                text:
                "Con số may mắn của bạn là 7, có nghĩa là vào ngày 17 tháng 7 năm 2023, cuộc sống của bạn sẽ thay đổi tốt đẹp hơn."
            },
        ]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    { name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0 },
                    { name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0 },
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Rudy Baldwin",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            console.log('test', t);
            var a = parseInt(t[0]);
            switch (a) {
                case 2491: case 2503: case 2515: case 2527: case 2539: case 2551: case 2563:
                    e.zodiak = 1;
                    break;
                case 2492: case 2504: case 2516: case 2528: case 2540: case 2552: case 2564:
                    e.zodiak = 2;
                    break;
                case 2493: case 2505: case 2517: case 2529: case 2541: case 2553: case 2565:
                    e.zodiak = 3;
                    break;
                case 2494: case 2506: case 2518: case 2530: case 2542: case 2554: 
                    e.zodiak = 4;
                    break;
                case 2495: case 2507: case 2519: case 2531: case 2543: case 2555: 
                    e.zodiak = 5;
                    break;
                case 2496: case 2508: case 2520: case 2532: case 2544: case 2556: 
                    e.zodiak = 6;
                    break;
                case 2497: case 2509: case 2521: case 2533: case 2545: case 2557: 
                    e.zodiak = 7;
                    break;
                case 2498: case 2510: case 2522: case 2534: case 2546: case 2558: 
                    e.zodiak = 8;
                    break;
                case 2499: case 2511: case 2523: case 2535: case 2547: case 2559: 
                    e.zodiak = 9;
                    break;
                case 2500: case 2512: case 2524: case 2536: case 2548: case 2560: 
                    e.zodiak = 10;
                    break;
                case 2501: case 2513: case 2525: case 2537: case 2549: case 2561: 
                    e.zodiak = 11;
                    break;
                case 2502: case 2514: case 2526: case 2538: case 2550: case 2562:
                    e.zodiak = 12;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
                      {name: "Mouse", id: 1},
                      {name: "Ox", id: 2},
                      {name: "Tiger", id: 3},
                      {name: "Rabbit", id: 4},
                      {name: "Dragon", id: 5},
                      {name: "Snake", id: 6},
                      {name: "Horse", id: 7},
                      {name: "Goat", id: 8},
                      {name: "Monkey", id: 9},
                      {name: "Chicken", id: 10},
                      {name: "Dog", id: 11},
                      {name: "Pig", id: 12},
        ]),
        (e.DateBirthday = [{ day: [1, 31], month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], year: [2491, 2565] }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["01", "01", "01"],
            fabruary: ["02", "02", "02"],
            march: ["03", "03", "03"],
            april: ["04", "04", "04"],
            may: ["05", "05", "05"],
            june: ["06", "06", "06"],
            july: ["07", "07", "07"],
            august: ["08", "08", "08"],
            september: ["09", "09", "09"],
            october: ["10", "10", "10"],
            november: ["11", "11", "11"],
            december: ["12", "12", "12"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () {}, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) {}, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = { 
                    showCursor: !1,
                };
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                        r == o + 1 &&
                            setTimeout(function () {
                                $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                            }, 1500); // 1500
                }),
                    1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    typeSpeed: 20,
                    callback: function () {
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                        (t = e.managerDialog[1]).m.text +
                                                        '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                        t.w.text +
                                                        "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 100);
                                    },
                                });
                        }, 100);
                    },
                });
        });
});
