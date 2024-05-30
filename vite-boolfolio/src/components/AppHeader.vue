<script>
export default {
    name: 'AppHeader'
}

</script>
<template>
    <div class="container-fluid" style="height: 70px; background-color: rgb(234, 225, 225);">
        <div class="container_links">
            <div class="logo">
                <img class="img_logo" src="/images/logo.png" alt="">
            </div>
            <div>
                <a href="">Home</a>
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Contacts</a>
            </div>
        </div>


    </div>
</template>
<style>
.container_links {
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;

    .img_logo {
        width: 100%;
        height: 70px;
        object-fit: contain;
    }


    a {
        text-decoration: none;
        padding: 1rem;
        color: black;
    }

    a:hover {
        font-size: large;
    }

}


</style>