<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container col-md-9 col-md-offset-2">
    <form class="form-horizontal col-md-5 col-md-offset-2">
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">名字：</span>
                <input type="text" class="form-control" id="name" v-model="userInfo.name" placeholder="名字">
            </div>
        </div>

        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">手机：</span>
                <input type="text" class="form-control" id="telePhone" placeholder="手机" v-model="userInfo.telePhone">
            </div>
        </div>
        <!--<div class="form-group">-->
            <!--<div class="input-group">-->
                <!--<span class="input-group-addon">QQ：</span>-->
                <!--<input type="text" class="form-control" id="qq" placeholder="QQ">-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
            <!--<div class="input-group">-->
                <!--<span class="input-group-addon">微信：</span>-->
                <!--<input type="text" class="form-control" id="we-chat" placeholder="微信">-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
            <!--<div class="input-group">-->
                <!--<span class="input-group-addon">报考学校：</span>-->
                <!--<select class="form-control" id="school" v-model="userInfo.schoolId">-->
                    <!--<option value="1">上海大学</option>-->
                    <!--<option value="2">中山大学</option>-->
                    <!--<option value="3">南京大学</option>-->
                <!--</select>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
            <!--<div class="input-group">-->
                <!--<span class="input-group-addon">报考专业：</span>-->
                <!--<select class="form-control" id="professionalId" v-model="userInfo.professionalId" >-->
                    <!--<option value="1">通信工程</option>-->
                    <!--<option value="2">计算机</option>-->
                    <!--<option value="3">法学</option>-->
                <!--</select>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
            <!--<div class="input-group">-->
                <!--<span class="input-group-addon">年级：</span>-->
                <!--<select class="form-control" id="grade">-->
                    <!--<option>2019</option>-->
                    <!--<option>2020</option>-->
                <!--</select>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
            <!--<div class="input-group">-->
                <!--<span class="input-group-addon">需求：</span>-->
                <!--<textarea class="form-control" rows="2" id="requirement" v-model="userInfo.requirement"></textarea>-->
            <!--</div>-->
        <!--</div>-->
      <button type="submit" class="btn btn-default" v-on:click="submit()">提交</button>
    </form>
      <div class="alert alert-success col-md-5 col-md-offset-2">提交成功</div>
  </div>
</template>

<script>
export default {
    name: 'AddStu',
    data(){
        return {
            userInfo:{id:0,name:null,telePhone:null,schoolId:0,professionalId:0}
        }
    },
    methods:{
        submit(){
            this.$http.post('http://39.104.60.7:8080/success/student/updateStudent', this.userInfo)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

}
</script>
