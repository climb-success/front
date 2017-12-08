<template>
  <div class="container col-md-9 col-md-offset-2">
    <form class="form-horizontal col-md-5 col-md-offset-2">
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">名字：</span>
                <input type="text" class="form-control" id="name" placeholder="名字">
            </div>
        </div>

        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">手机：</span>
                <input type="text" class="form-control" id="phone" placeholder="手机">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">QQ：</span>
                <input type="qq" class="form-control" id="qq" placeholder="QQ">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">微信：</span>
                <input type="text" class="form-control" id="we-chat" placeholder="微信">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">报考学校：</span>
                <select class="form-control" id="school">
                    <option>上海大学</option>
                    <option>中山大学</option>
                    <option>南京大学</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">报考专业：</span>
                <select class="form-control" id="profession" >
                    <option>通信工程</option>
                    <option>计算机</option>
                    <option>法学</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">年级：</span>
                <select class="form-control" id="grade">
                    <option>2019</option>
                    <option>2020</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">需求：</span>
                <textarea class="form-control" rows="2" id="requirement"></textarea>
            </div>
        </div>
      <button type="submit" class="btn btn-default">提交</button>
    </form>
      <div class="alert alert-success col-md-5 col-md-offset-2">提交成功</div>
  </div>
</template>

<script>
export default {
  name: 'AddStu',

}
</script>
