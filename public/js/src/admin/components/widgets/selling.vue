<style>

</style>

<template>
    <div class="col-md-3 col-sm-6">
        <div id="best-selling" class="dash-widget-item">
            <div class="dash-widget-header">
                <div class="dash-widget-title">Best Sellings</div>
                <img src="/static/images/admin/widgets/alpha.jpg" alt="">
                <div class="main-item">
                    <small>Samsung Galaxy Alpha</small>
                    <h2>$799.99</h2>
                </div>
            </div>

            <div class="listview p-t-5">
                <a class="lv-item" href="index.html">
                    <div class="media">
                        <div class="pull-left">
                            <img class="lv-img-sm" src="/static/images/admin/widgets/note4.jpg" alt="">
                        </div>
                        <div class="media-body">
                            <div class="lv-title">Samsung Galaxy Note 4</div>
                            <small class="lv-small">$850.00 - $1199.99</small>
                        </div>
                    </div>
                </a>
                <a class="lv-item" href="index.html">
                    <div class="media">
                        <div class="pull-left">
                            <img class="lv-img-sm" src="/static/images/admin/widgets/mate7.jpg" alt="">
                        </div>
                        <div class="media-body">
                            <div class="lv-title">Huawei Ascend Mate</div>
                            <small class="lv-small">$649.59 - $749.99</small>
                        </div>
                    </div>
                </a>
                <a class="lv-item" href="index.html">
                    <div class="media">
                        <div class="pull-left">
                            <img class="lv-img-sm" src="/static/images/admin/widgets/535.jpg" alt="">
                        </div>
                        <div class="media-body">
                            <div class="lv-title">Nokia Lumia 535</div>
                            <small class="lv-small">$189.99 - $250.00</small>
                        </div>
                    </div>
                </a>

                <a class="lv-footer" href="index.html">
                    View All
                </a>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            enable: true
        }
    },
    ready: function() {
        /*
         * Weather Widget
         */
        if ($('#weather-widget')[0]) {
            $.simpleWeather({
                location: 'Beijing, China',
                woeid: '',
                unit: 'c',
                success: function(weather) {
                    var html = '<div class="weather-status">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
                    html += '<ul class="weather-info"><li>'+weather.city+', '+weather.region+'</li>';
                    html += '<li class="currently">'+weather.currently+'</li></ul>';
                    html += '<div class="weather-icon wi-'+weather.code+'"></div>';
                    html += '<div class="dash-widget-footer"><div class="weather-list tomorrow">';
                    html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[1].high+'/'+weather.forecast[1].low+'</span><span>'+weather.forecast[1].text+'</span>';
                    html += '</div>';
                    html += '<div class="weather-list after-tomorrow">';
                    html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[2].high+'/'+weather.forecast[2].low+'</span><span>'+weather.forecast[2].text+'</span>';
                    html += '</div></div>';
                    $("#weather-widget").html(html);
                },
                error: function(error) {
                    $("#weather-widget").html('<p>'+error+'</p>');
                }
            });
        }
    }
}
</script>
