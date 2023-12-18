<template>
    <div class="card_app">
        <div class="imageContainer">
            <img v-if="imgUrl" :src="imgUrl" alt=""/>
        </div>
        <div class="card-content">
            <div class="card-name">
                <div>{{ fname }}</div>
                <div>{{ lname }}</div>
            </div>
            <div class="card-title">
                <div>{{ title }}</div>
            </div>
            <div class="card-department">
                <div>{{ dept }}</div>
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
    dept: String,
  }
};
</script>