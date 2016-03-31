function configWechat(shareData, callback) {
    $.get('/api/wechat/config', {
        url: location.href.split('#')[0]
    }).done(function(data) {
        if (data.code !== 0) {
            return false;
        }
        wx.config({
            debug: false,
            appId: 'wx480b16b727066af3',
            timestamp: data.config.timestamp,
            nonceStr: data.config.noncestr,
            signature: data.config.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'previewImage'
            ]
        });
        wx.ready(function() {
            if (shareData) {
                var title = shareData.title;
                var link = window.location.href.split('#')[0];
                var imgUrl = window.location.protocol + '//' + window.location.hostname + shareData.image;
                var desc = shareData.desc;
                wx.onMenuShareTimeline({
                    title: title,
                    link: link,
                    imgUrl: imgUrl
                });
                wx.onMenuShareAppMessage({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl
                });
                wx.onMenuShareQQ({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl
                });
                wx.onMenuShareWeibo({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl
                });
            }

            callback(null);
        });

        wx.error(function(res) {
            callback(null);
        });
    }).fail(function(e) {
        callback(null);
    });
}
