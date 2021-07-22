<template>
  <div class="content">
    <div class="content-title">
      <span>New Courses</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="course-card">
          <img src="../../../assets/Scene Plants.png" alt="Scene Plants"/>
          <ul>
            <li style="height: 20px; "></li>
            <li style="font-weight: bold; font-size: 16px; ">Developer</li>
            <li>
              <p>Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum molestie lacuiirhs. Aenean.</p>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="course-card">
          <img src="../../../assets/Scene Whiteboard.png" alt="Scene Whiteboard"/>
          <ul>
            <li style="height: 20px; "></li>
            <li style="font-weight: bold; font-size: 16px; ">Photography</li>
            <li>
              <p>Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum molestie lacuiirhs. Aenean.</p>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="course-card">
          <img src="../../../assets/Scene Wireframe.png" alt="Scene Wireframe"/>
          <ul>
            <li style="height: 20px; "></li>
            <li style="font-weight: bold; font-size: 16px; ">Audio Editing</li>
            <li>
              <p>Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum molestie lacuiirhs. Aenean.</p>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'newCourse'
}
</script>

<style scoped>
.content {
  width: 1140px;
  margin: auto;
}

.content-title {
  padding: 30px 0;
  font-size: 30px;
  font-family: 'Oswald', sans-serif;
  color: #6e6e6e;
}

.course-card {
  width: 100%;
  height: 350px;
}

.course-card img {
  width: 100%;
  height: 50%;
  object-fit: contain;
}

.course-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #6e6e6e;
  font-size: 14px;
  line-height: 20px;
}
</style>
