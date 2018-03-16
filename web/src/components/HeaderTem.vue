<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <img src="../../static/img/logo.jpg" style="position: relative; bottom: 12px"  alt="">
                </a>
            </div>
            <div class="navbar-collapse collapse" style="margin-left: 250px">
                <ul class="nav navbar-nav navbar-mid">
                    <li class=""><a href="/#/home"><span class="glyphicon glyphicon-grain"><strong> 网站首页</strong> </span></a></li>
                    <li class=""><a href="/#/stu"> <span class="glyphicon glyphicon-bed"><strong> 专业课1对1</strong></span></a></li>
                    <li class=""><a href="/#/news"> <span class="glyphicon glyphicon-flag"><strong> 考研资讯</strong></span></a></li>
                    <li class=""><a href="/#/about"> <span class="glyphicon glyphicon-glass"><strong> 关于我们</strong></span></a></li>

                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'HeaderTem'

}
</script>
<style>
    .navbar{
        background-color:white;
    }
    .navbar-nav{
        font-family: "仿宋";
        font-size: 15px;
    }
</style>
