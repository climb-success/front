<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">地区：</span>
                <select class="form-control" id="province" v-on:change="school" v-model="provinceId">
                    <option disabled value="">请选择</option>
                    <option v-for="(provinces,id) in provinceData" :value="id" >{{ provinces }}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">报考学校：</span>
                <select class="form-control" id="school" v-on:change="profession" v-model="userInfo.schoolId">
                    <option disabled value="0">请选择</option>
                    <option v-for="schools in schoolData" :value="schools.id">{{schools.name}}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">报考专业：</span>
                <select class="form-control" id="professionalId" v-model="userInfo.professionalId" >
                    <option disabled value="0">请选择</option>
                    <option v-for="professions in professionData.professionals" :value="professions.id">{{ professions.name }}</option>
                </select>
            </div>
        </div>
        <button type="submit" class="btn btn-default" v-on:click="submit()">提交</button>
    </form>
      <div class="alert alert-success col-md-5 col-md-offset-2" v-bind:class="{hidden: isHidden}">提交成功</div>
  </div>
</template>

<script>
import { provinces } from '../config/index';
export default {
    name: 'AddStu',
    data(){
        return {
            userInfo:{id:0,name:null,telePhone:null,schoolId:0,professionalId:0},
            provinceData:provinces,//地区数据
            provinceId:'',//选中的地区Id
            schoolData:[],//学校数据
            professionData:[],//专业数据
            isHidden:true
        }
    },
    methods:{
        submit(){
            const self = this;
            if(self.userInfo.name == null || self.userInfo.telePhone == null || self.userInfo.schoolId === 0 || self.userInfo.professionalId === 0 ){
                alert('有数据未填写，请完善');
            }else {
                this.$http.post('http://39.104.60.7:8080/success/student/updateStudent', this.userInfo)
                    .then(function (response) {
                        if(response.data=='success'){
                            self.isHidden=false;
                            setTimeout(function (){//延迟刷新
                                location.reload();
                            }, 1500);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }

        },
        school(){
            const self = this;
            let province = self.provinceData[self.provinceId];
            this.$http.get('http://39.104.60.7:8080/success/school/searchSchool?province='+ province)
                .then(function (response) {
                    self.schoolData = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        profession(){
            const self = this;
            let schoolId = self.userInfo.schoolId;
            this.$http.get('http://39.104.60.7:8080/success/school/getSchool?id='+schoolId)
                .then(function (response) {
                    self.professionData = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }

}
</script>
<style>
    body {
        background-image: url("../../static/img/1v1.jpg") ;
    }
</style>