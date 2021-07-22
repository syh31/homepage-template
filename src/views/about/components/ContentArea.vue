<template>
  <div class="content">
    <el-row :gutter="30">
      <el-col :span="17">
        <div class="title">
          About Us
        </div>
        <div style="display: flex">
          <div class="text-area left-has-img">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos
              aliquid molestiae ea laborum ex Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat
              consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae
              sapiente.</p>
            <p>Consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil
              nesciunt unde veniam magnam repudiandae sapiente.</p>
          </div>
          <div>
            <img src="../../../assets/abouts/about.jpg" width="300px"  alt=""/>
          </div>
        </div>
        <div class="title">
          Our Achievements
        </div>
        <strong>2021</strong>
        <div class="text-area">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente. consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
        </div>
        <strong>2020</strong>
        <div class="text-area">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente. consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
        </div>
        <strong>2019</strong>
        <div class="text-area">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente. consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
        </div>
        <strong>2018</strong>
        <div class="text-area">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente. consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
        </div>
        <div class="title">
          Our Team
        </div>
        <div class="text-area">
          <p>Voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias quia.Voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias quia.Voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias quia.</p>
        </div>
      </el-col>
      <el-col :span="7">
        <lastest-news/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LastestNews from './LastestNews'

export default {
  name: 'ContentArea',
  components: {LastestNews}
}
</script>

<style scoped>
.content {
  width: 1140px;
  margin: auto;
}

.title {
  margin: 30px 0 10px 0;
  font-size: 24px;
  font-weight: normal;
  font-family: 'Oswald', sans-serif;
  line-height: 1.1;
  color: rgb(110, 110, 110);
}

.text-area {
  flex: 1;
}

.text-area p {
  color: rgb(110,110,110);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
}

.left-has-img {
  padding-right: 10px;
}

.content strong {
  color: #6e6e6e;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
}
</style>
