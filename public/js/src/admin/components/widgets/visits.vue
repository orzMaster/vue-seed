<style>

</style>

<template>
    <div class="col-md-3 col-sm-6">
        <div id="site-visits" class="dash-widget-item bgm-teal">
            <div class="dash-widget-header">
                <div class="p-20">
                    <div class="dash-widget-visits"></div>
                </div>

                <div class="dash-widget-title">For the past 30 days</div>

                <ul class="actions actions-alt">
                    <li class="dropdown">
                        <a href="index.html" data-toggle="dropdown">
                            <i class="zmdi zmdi-more-vert"></i>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="index.html">Refresh</a>
                            </li>
                            <li>
                                <a href="index.html">Manage Widgets</a>
                            </li>
                            <li>
                                <a href="index.html">Widgets Settings</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="p-20">

                <small>Page Views</small>
                <h3 class="m-0 f-400">47,896,536</h3>

                <br/>

                <small>Site Visitors</small>
                <h3 class="m-0 f-400">24,456,799</h3>

                <br/>

                <small>Total Clicks</small>
                <h3 class="m-0 f-400">13,965</h3>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {

        }
    },
    methods: {
    
    },
    components: {

    },
    ready: function() {
        function sparklineLine(id, values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor) {
            $('.'+id).sparkline(values, {
                type: 'line',
                width: width,
                height: height,
                lineColor: lineColor,
                fillColor: fillColor,
                lineWidth: lineWidth,
                maxSpotColor: maxSpotColor,
                minSpotColor: minSpotColor,
                spotColor: spotColor,
                spotRadius: spotRadius,
                highlightSpotColor: hSpotColor,
                highlightLineColor: hLineColor
            });
        }
        /* Dash Widget Line Chart */
        if ($('.dash-widget-visits')[0]) {
            sparklineLine('dash-widget-visits', [9,4,6,5,6,4,5,7,9,3,6,5], '100%', '95px', 'rgba(255,255,255,0.7)', 'rgba(0,0,0,0)', 2, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 5, 'rgba(255,255,255,0.4)', '#fff');
        }
    }
}
</script>