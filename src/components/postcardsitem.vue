<template>
    <li>
        <div class="main">
            <div class="imag">
                <img :src="post.pic_url_1">
            </div>
            <div class="posttext">
                {{post.postcard_tags}}
            </div>
            <div class="posttext">
                {{post.title}}
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>


<style scoped>
    .main {
        border: 1px solid #ccc;

    }
    .imag {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 350px;
        width: 750px; 
        padding: 7px;
        display: flex;
        justify-content: space-between;
    }
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .imag {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 750px; 
        padding: 7px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
    }

</style>