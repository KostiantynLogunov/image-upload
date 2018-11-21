<template>
    <div class="">
        <!--<form action="{{ route('upload') }}" enctype="multipart/form-data" method="post">-->
            <input type="file" name="image" @change="GetImage" accept="image/*">
            <img :src="avatar" alt="Image">
        <a href="#" class="btn btn-success" @click.prevent="upload">Upload</a>
        <!--</form>-->
    </div>
</template>

<script>
    export default {
        name: "UploadForm",

        props: ['user'],

        data(){
            return {
                avatar: this.user.avatar,
            }
        },

        methods: {
            GetImage(e){
                let image = e.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    // console.log(e)
                    this.avatar = e.target.result;
                }
            },

            upload()
            {
                axios.post('/upload', {'image': this.avatar})
            }
        }
    }
</script>

<style scoped>

</style>
