'use strict';

module.exports = {
    ran: function(n, m) {
        return Math.round(Math.random() * (m - n) + n);
    },
    rid: function(length, type) {
        var obj = {
            n: '1234567890',
            a: 'abcdefghizklmnopqrstuvwsyz',
            A: 'ABCDEFGHIZKLMNOPQRSTUVWSYZ',
            s: '~!@#$%^&*()_+;,./?<>'
        };
        var arr = [];
        var pw = '';
        if (type.indexOf('n') !== -1) arr.push(obj.n);
        if (type.indexOf('a') !== -1) arr.push(obj.a);
        if (type.indexOf('A') !== -1) arr.push(obj.A);
        if (type.indexOf('s') !== -1) arr.push(obj.s);
        for (var i = 0; i < length; i++) {
            var j = module.exports.ran(0, arr.length - 1);
            var k = module.exports.ran(0, arr[j].length - 1);
            pw += arr[j].charAt(k);
        }
        return pw;
    },
    fileUpload: function(formdata, success, error) {
        $.ajax({
            type: 'POST',
            url: '/file/upload',
            data: formdata,
            dataType: 'json',
            timeout: 5000,
            processData: false,
            contentType: false,
            success: success,
            error: error
        });
    },
    sanitizeDate: function(givenDate) {
        var date

        if (givenDate && 'object' === typeof givenDate)
            date = givenDate
        else if (givenDate && ('number' === typeof givenDate || 'string' === typeof givenDate))
            date = new Date(givenDate)
        else
            date = new Date

        return date
    },
    getYYYYMMDD: function(givenDate) {
        var date = sanitizeDate(givenDate)

        return date.getFullYear() + '-' + // YYYY
            ('0' + (date.getMonth() + 1)).slice(-2) + '-' + // MM
            ('0' + date.getDate()).slice(-2) // DD

    },
    getCurrentWorkingDay: function() {
        var date = new Date
            // working day is from 6am to 6am
        if (date.getHours() < 6)
            date.setDate(date.getDate() - 1) // yesterday

        return new Date(getYYYYMMDD(date))
    },

    // 扩展Objects属性
    // example: srcObj = {a: 1, b:2}; destObj = {c: 3}
    // objectExtend(srcObj, destObj) == {a: 1, b: 2, c: 3}
    objectExtend: function(srcObj, destObj) {
        srcObj = srcObj || {};
        for (var key in destObj) {
            if (!srcObj[key]) {
                srcObj[key] = destObj[key];
            }
        }
        return srcObj;
    }
};
