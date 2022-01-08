<template>
    <div class="header">
        <div><router-link to="/news">News</router-link></div> 
        <div><router-link to="/ask">Ask</router-link></div> 
        <div><router-link to="/jobs">Jobs</router-link></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    background-color: darkseagreen;
    color: white;
    padding: 10px;
    display: flex;
}
.header div {
    width: 50px;
    text-align: center;
}
.header a {
    color: white;
    text-decoration: none;
}
.header .router-link-active {
    color: rgb(5, 58, 42);
}
</style>