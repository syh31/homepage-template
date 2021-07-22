<template>
  <div class="content">
    <el-row>
      <el-col :span="17">
        <div class="content-container">
          <div class="content-title">
            <span>About Us</span>
          </div>
          <p>Perspiciatis unde omnis iste natus error sit voluptatem. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus musull dui.</p>
          <p>Lorem ipsumulum aenean noummy endrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada odio.</p>
          <p>Lorem ipsumulum aenean noummy endrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada odio.</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="content-container">
          <div class="content-title">
            <span>Up Coming Courses</span>
          </div>
          <ul>
            <li>
              <span class="click-style">Mathematics and Computer Science</span>
            </li>
            <li>
              <span class="click-style">Mathematics and Philosophy</span>
            </li>
            <li>
              <span class="click-style">Philosophy and Modern Languages</span>
            </li>
            <li>
              <span class="click-style">History (Ancient and Modern)</span>
            </li>
            <li>
              <span class="click-style">Classical Archaeology and Ancient History</span>
            </li>
            <li>
              <span class="click-style">Physics and Philosophy</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'aboutUs'
}
</script>

<style scoped>
.content {
  width: 1140px;
  margin: auto;
}

.content p {
  margin: 0 0 10px 0;
  font-family: 'Lato', sans-serif;
  color: #6e6e6e;
  font-size: 14px;
  line-height: 20px;
}

.content-container {
  margin-right: 20px;
}

.content-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #6e6e6e;
  font-size: 15px;
  line-height: 20px;
}

.content-container li {
  margin-bottom: 10px;
}

.click-style:hover {
  text-decoration: underline;
  cursor: pointer;
}

.content-title {
  padding: 30px 0;
  font-size: 30px;
  font-family: 'Oswald', sans-serif;
  color: #6e6e6e;
}
</style>
