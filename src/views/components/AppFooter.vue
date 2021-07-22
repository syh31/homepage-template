<template>
  <footer>
    <div class="content">
      <el-row>
        <el-col :span="6">
          <div class="item">
            <div class="item-title">
              <span>Course Categories</span>
            </div>
            <ul>
              <li>
                <span class="click-style">List of Technology</span>
              </li>
              <li>
                <span class="click-style">List of Business</span>
              </li>
              <li>
                <span class="click-style">List of Photography</span>
              </li>
              <li>
                <span class="click-style">List of Language</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="item-title">
              <span>Products Categories</span>
            </div>
            <ul>
              <li>
                <span class="click-style">Individual Plans</span>
              </li>
              <li>
                <span class="click-style">Business Plans</span>
              </li>
              <li>
                <span class="click-style">Free Trial</span>
              </li>
              <li>
                <span class="click-style">Academic</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="item-title">
              <span>Browse by Categories</span>
            </div>
            <ul>
              <li>
                <span class="click-style">All Courses</span>
              </li>
              <li>
                <span class="click-style">All Instructors</span>
              </li>
              <li>
                <span class="click-style">All Members</span>
              </li>
              <li>
                <span class="click-style">All Groups</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="item-title">
              <span>Contact</span>
            </div>
            <ul>
              <li>
                <p>Lorem reksi this dummy text unde omnis iste natus error sit volupum</p>
              </li>
              <li>
                <i class="el-icon-location-outline"></i><span>&nbsp;Kerniles 416 - United Kingdom</span>
              </li>
              <li>
                <i class="el-icon-phone"></i><span>&nbsp;+00 123 156 711</span>
              </li>
              <li>
                <i class="el-icon-message"></i><span>&nbsp;youremail@email.com</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  height: 230px;
  margin-top: 20px;
  background-color: #f0f6fc;
  overflow-x: hidden;
}

.content {
  width: 1140px;
  margin: auto;
}

.item-title {
  margin: 20px 0;
  font-size: 18px;
  font-family: 'Oswald', sans-serif;
  color: #6e6e6e;
}

.item ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #6e6e6e;
}

.item li {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Lato', sans-serif;
}

.click-style:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
