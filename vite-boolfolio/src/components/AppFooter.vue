<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
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
                <h3>Links</h3>
                <ul class="list-unstyled">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contacts</li>

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
</style>