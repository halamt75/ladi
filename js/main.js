$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="/img/Hanz.png" alt="" />'),
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
                    "Hello! Ako si <b style='color: rgb(134, 144, 254);'>Master Hanz Cua! \ </b>Isang Psychic reader at Astrologo<br><br>Ang aking horoscope para sa " +
                    ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")), monthA[p.getMonth()]) +
                    " ay nakabasi sa buong mga Pilipino. Ang tatlong mga palatandaan ng zodiac ay magsisimulang lumiligid sa pera, at ang dalawag (2) palatandaan, ay magiging mahirap.",
            },
            
            { text: "Ikaw ba ay Lalaki o Babae?", m: { text: "Lalaki" }, w: { text: "Babae" } },
            { text: "Kailan ka ipinanganak?" },
        ]),
        (e.userZodiak = [{ text: "Salamat Sa pamamagitan ng horoscope ikaw ay  - <p>{zodie}</p>. <p class='hidden-zodie' style='display: none'>{zodie}</p>" }]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {
                            text:
                                "Ang \"<b>{zodie}</b>\" ay magkakaroon ng isang pampinansyal na rebolusyon sa pinakamalapit na hinaharap. Ang kapalaran sa pananalapi ay nasa ilalim na ngayon. Tinanggihan mo ang iyong sarili sa maraming mga bagay, pinapahirapan ka ng mga utang. Determinado kang itulak ang pera at kapalaran sa iyong buhay.",
                        },
                        { text: "Hindi ka makakalabas sa butas na ito, sa mga darating na taon kung hindi ka pumili ng tamang pagpipilian, na nangangahulugan sa isang rebolusyon sa pananalapi." },
                        { text: "Kung nais mong ihinto ang pagiging mahirap sa 2023. Makinig ka sa mga sasabihin ko sa iyo ngayon." },
                        { text: "Malinaw kong nakikita na magkakaroon ka ng pagkakataon na baguhin ang napiling vector ngayong buwan na ito. Ito ay magiging isang kanais-nais na panahon para sa pagbabago ng iyong buhay, mula sa isang malas hanggang sa isang mabuti, hanggang sa katapusan ng iyong buhay."},
                        {
                            text:
                                "Wala sa buhay mo ang pangyayari, dahil ito ay nagkataon lamang. " +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January,February,March,April,May,June,July,August,September,October,November,December".split(",")), monthA[p.getMonth()]) +
                                "Ang palatandaan ng Libra ay madaling kapitan ng masamang enerhiya. Kailangan mong protektahan ang iyong sarili at akitin ang swerte sa pera.",
                        },
                        { text: "Ang pampa swerte mong numero ay apat (4). Nangangahulugan ito na sa " + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January,February,March,April,May,June,July,August,September,October,November,December".split(",")), monthA[p.getMonth()]) + " , 2023, ang iyong buhay ay maaaring magbago nang malaki para sa mas magandang pamumuhay." },
                    ],
                    [
                        { text: "<b>Paano mo maakit ang pera at swerte sa ngayong taong 2023 sa pamamagitan ng iyong horoscope?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "Ito na ang iyong huling pagkakataon para baguhin ang iyong kapalaran sa 2023 kung makaligtaan mo ang anting-anting na ito. Ang buhay mo ay magpapatuloy ng ganyan. Ikaw ang dapat magdesisyon!" },
                        { text: "Tutulungan kitang makaakit ng pera at magandang kapalaran sa iyong zodiac sign sa 2023. Kung pumayag ka, makakalimutan mo ito. ano ang kahirapan ilalabas ko ang bihag mong ari-arian para sa iyo." },
                        { text: "Gagawa ako ng isang espesyal na anting-anting para sa iyo at bibigyan ito ng lakas na mahika, upang magbigay liwanag mula sa madilim na enerhiya." },
                        {text: " <br> <img width='200px' src='img/product.jpg'> </br> Ito ay isang espesyal na anting-anting para lamang sa iyo: "},
                        { text: "Bakit kailangan mo ang anting-anting na ito?" },
                        { text: "Ang anting-anting na ito ay ganap na magbabago sa iyong buhay sa loob lamang ng isang buwan. Nawala na lahat ng utang mo. Darating ang pera sa iyo mula sa maraming iba't ibang mga channel. At magagawa mong kalimutan ang tungkol sa mga pagkabigo sa pananalapi. At magkakaroon ng pera para sa natitirang bahagi ng iyong buhay."},
                        {
                            text:
                                'Palagi kong sinusubukan na tulungan ang mga tao na malutas ang kanilang mga problema, at hindi ko kailanman sinubukan na kumita mula rito. Sa ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December.".split(",")), monthA[p.getMonth()]) + ' lang, Makakakuha ka ng 50% na diskwento sa Gold Amulet. Ang presyo para sa iyo ay magiging <b>' +
                                '1999' +
                                '</b> <b>' + 
                                'Peso' +
                                " only </b>",
                        },
                        {text: "Maaari kang mag-order ng anting-anting ngayon! Ilagay mo lamang ang iyong pangalan at numero ng telepono sa form at magbabago ang iyong buhay. Ipinapangako ko!<br><br> "}
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
                        {text: " <br> <img width='200px' src='img/product.png'> </br> Bùa hộ mệnh trông như thế này: "},
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
                "Ang iyong masuwerteng numero ay 7, na nangangahulugan na sa Hulyo 17, 2023, ang iyong buhay ay magbabago para sa mas mahusay."
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
                case 1948: case 1960: case 1972: case 1984: case 1996:
                    e.zodiak = 1;
                    break;
                case 1949: case 1961: case 1973: case 1985: case 1997:
                    e.zodiak = 2;
                    break;
                case 1950: case 1962: case 1974: case 1986: case 1998:
                    e.zodiak = 3;
                    break;
                case 1951: case 1963: case 1975: case 1987: case 1999: 
                    e.zodiak = 4;
                    break;
                case 1952: case 1964: case 1976: case 1988: case 2000: 
                    e.zodiak = 5;
                    break;
                case 1953: case 1965: case 1977: case 1989: case 2001: 
                    e.zodiak = 6;
                    break;
                case 1954: case 1966: case 1978: case 1990: case 1942: 
                    e.zodiak = 7;
                    break;
                case 1943: case 1955: case 1967: case 1979: case 1991: 
                    e.zodiak = 8;
                    break;
                case 1944: case 1956: case 1968: case 1980: case 1992:
                    e.zodiak = 9;
                    break;
                case 1945: case 1957: case 1969: case 1981: case 1993: 
                    e.zodiak = 10;
                    break;
                case 1946: case 1958: case 1970: case 1982: case 1994: 
                    e.zodiak = 11;
                    break;
                case 1947: case 1959: case 1971: case 1983: case 1995:
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
        (e.DateBirthday = [{ day: [1, 31], month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], year: [1943, 2001] }]),
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
