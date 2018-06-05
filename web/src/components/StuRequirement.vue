<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="row stu">
        <header-tem></header-tem>
        <div class="container col-md-9 col-md-offset-2" style="margin-top: 80px">
            <form class="form-horizontal col-md-5 col-md-offset-2">
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">名字：</span>
                        <input type="text" class="form-control" id="stu_name" v-model="user_info.stu_name" placeholder="名字">
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">手机：</span>
                        <input type="text" class="form-control" id="phone" placeholder="手机" v-model="user_info.phone">
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">报考学校：</span>
                        <input type="text" class="form-control" id="goal_school" placeholder="报考学校" v-model="user_info.goal_school">
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">报考专业：</span>
                        <input type="text" class="form-control" placeholder="专业" v-model="user_info.goal_profession">
                    </div>
                </div>
                <button type="submit" class="btn btn-default" v-on:click="submit()">提交</button>
            </form>
            <div class="alert alert-success col-md-5 col-md-offset-2" v-bind:class="{hidden: isHidden}">提交成功</div>
        </div>
    </div>
</template>

<script>
import HeaderTem from './HeaderTem.vue';

export default {
    name: 'StuRequirement',
    components:{
        HeaderTem
    },
    data(){
        return {
            user_info:{stu_name:'',phone:'',goal_school:'',goal_profession:'',qq:'123'},
            isHidden:true
        }
    },
    methods:{
        submit(){
            const self = this;
            this.$http.post('http://119.27.181.246/student-1v1', this.user_info)
                .then(function (response) {
                    console.log(response);
                    // if(response.data=='success'){
                    //     self.isHidden=false;
                    //     setTimeout(function (){//延迟刷新
                    //         location.reload();
                    //     }, 1500);
                    // }
                })
                .catch(function (error) {
                    console.log(error);
                })

        },
    }

}
</script>
<style>
    .stu {
        width: 100%;
        height: 100%;
        /*background-image: url("../../static/img/1v1.jpg");*/
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
    }

</style>