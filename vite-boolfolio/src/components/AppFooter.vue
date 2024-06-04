<script>
export default {
    name: 'AppFooter'
}


</script>

<template>
    <div>

    </div>
    <div class="container-fluid pt-5" style="background-color: rgb(234, 225, 225);">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 ">
            <div class="col text-center">
                <h3>Descriptio Me</h3>
                <ul class="list-unstyled">
                    <img class="img_logo" src="/images/logo.png" alt="">
                    <p>
                        By Angelo Devito <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </p>
                </ul>
            </div>
            <div class="col text-center">
                <h3>Social</h3>
                <ul class="list-unstyled">
                    <li><a href="">
                            <i style="color: black;" class="fa-brands fa-github"></i>
                            GitHub
                        </a>
                    </li>
                    <li><a href="">
                            <i class="fa-brands fa-linkedin"></i>
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col img_footer">
            </div>
        </div>
    </div>

<div class="container_">
    <div class="container_copy">
        <div class="copy text-white">

            <p>
                © 2024 Angelo Devito

            </p>



        </div>
        <div class="container_links">
            <ul class="links text-white">
                <router-link class="text-white" :to="{name: 'home'}">Home</router-link>
                <router-link class="text-white" :to="{name: 'about'}">About</router-link>
                <router-link class="text-white" :to="{name: 'blog'}">Projects</router-link>
                <router-link class="text-white" :to="{name: 'contacts'}">Contacts</router-link>

            </ul>
        </div>


    </div>
</div>

 
</template>

<style>

.img_logo {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

a {
    text-decoration: none;
    color: black;
}

li {
    padding: 0.5rem;
}


a:hover {
    font-size: large;
}

li:hover {
    font-size: large;
}

.container_{
    background-color: rgb(40, 39, 39);




    .container_copy {
        display: flex;
        width: 80%;
        display: flex;
        height: 70px;
        justify-content: space-around;
        margin: auto;
        background-color: rgb(40, 39, 39);
        align-items: center;
    


        .links {
            display: flex;
            list-style: none;
            color: white;
            align-items: end;
        }
        


    }


}






</style>