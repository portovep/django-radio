(function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function(e, t) {
    var n = "xan._feb._mar._abr._mai._xun._xul._ago._set._out._nov._dec.".split("_"),
        a = "xan_feb_mar_abr_mai_xun_xul_ago_sep_out_nov_dec".split("_");
    t.lang("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: function(e, t) {
            return /-MMM-/.test(t) ? a[e.month()] : n[e.month()]
        },
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe ás" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[mañá ás" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [ás" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[onte ás" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[o] dddd [pasado ás" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "fai %s",
            s: "uns segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), e.fullCalendar.datepickerLang("gl", "gl", {
        closeText: "Pechar",
        prevText: "&#x3C;Ant",
        nextText: "Seg&#x3E;",
        currentText: "Hoxe",
        monthNames: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"],
        monthNamesShort: ["xan", "feb", "mar", "abr", "mai", "xun", "xul", "ago", "set", "out", "nov", "dec"],
        dayNames: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mér", "xov", "ven", "sáb"],
        dayNamesMin: ["D", "L", "M", "M", "X", "V", "S"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("gl", {
        defaultButtonText: {
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Axenda"
        },
        allDayText: "Todo o día"
    })
});