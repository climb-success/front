<template>
  <div class="container">
    <form>
        <div class="form-group">
            <label for="">name</label>
            <input type="text" class="form-control" id="name" placeholder="name">
        </div>
        <div class="form-group">
            <label for="">手机</label>
            <input type="phone" class="form-control" id="phone" placeholder="phone">
        </div>
        <div class="form-group">
            <label for="">QQ</label>
            <input type="qq" class="form-control" id="qq" placeholder="qq">
        </div>
        <div class="form-group">
            <label for="">微信</label>
            <input type="we-chat" class="form-control" id="we-chat" placeholder="we-chat">
        </div>
        <div class="form-group">
            <label for="">报考学校</label>
            <select class="form-control">
                <option>上海大学</option>
                <option>中山大学</option>
                <option>南京大学</option>
            </select>
          </div>
        <div class="form-group">
            <label for="">报考专业</label>
            <select class="form-control">
                <option>通信工程</option>
                <option>计算机</option>
                <option>法学</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">年级</label>
            <select class="form-control">
                <option>2019</option>
                <option>2020</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">需求</label>
            <textarea class="form-control" rows="3"></textarea>
        </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddStu',
  data () {
    return {
      msg: 'Adddddd'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
