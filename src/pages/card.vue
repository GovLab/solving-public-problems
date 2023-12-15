<template>
    <div class="card_app">
        <div class="imageContainer">
            <img v-if="imgUrl" :src="imgUrl" alt=""/>
        </div>
        <div class="card-content">
            <div class="card-name">
                <h3>{{ fname }}</h3>
                <h3>{{ lname }}</h3>
            </div>
            <div class="card-title">
                <h4>{{ title }}</h4>
            </div>
            <div class="work_location">
                <h4>{{ work_location }}</h4>
            </div>
        </div>
    </div>
    <!-- <div>
        <h1>{{ message }}</h1>
    </div> -->
</template>

<script>
export default {
  props: {
    imgUrl:String,
    fname: String,
    lname: String,
    title: String,
    work_location: String,
  }
};
</script>