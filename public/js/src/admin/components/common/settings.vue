<style>

</style>

<template>
    <li class="dropdown">
        <a data-toggle="dropdown" class="tm-settings" href="index.html"></a>
        <ul class="dropdown-menu dm-icon pull-right">
            <li class="hidden-xs">
                <a data-action="fullscreen" href="index.html"><i class="zmdi zmdi-fullscreen"></i> Toggle Fullscreen</a>
            </li>
            <li>
                <a data-action="clear-localstorage" href="index.html"><i class="zmdi zmdi-delete"></i> Clear Local Storage</a>
            </li>
            <li>
                <a href="index.html"><i class="zmdi zmdi-face"></i> Privacy Settings</a>
            </li>
            <li>
                <a href="index.html"><i class="zmdi zmdi-settings"></i> Other Settings</a>
            </li>
        </ul>
    </li>
</template>

<script>
module.exports = {
    data: function() {
        return {

        }
    },
    components: {

    },
    ready: function() {

    }
}
</script>