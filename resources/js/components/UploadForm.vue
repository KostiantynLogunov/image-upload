<template>
    <div class="">
        <input type="file" name="image" @change="GetImage" accept="image/*">
        <img :src="avatar" alt="Image">
        <a href="#" v-if="loaded" class="btn btn-success" @click.prevent="upload">Upload</a>
        <a href="#" v-if="loaded" class="btn btn-danger" @click.prevent="cancel">Cancel</a>
    </div>
</template>

<script>

    export default {
        name: "UploadForm",

        props: ['user'],

        data(){
            return {
                avatar: this.user.avatar,
                loaded: false,
            }
        },

        methods: {
            GetImage(e) {
                let image = e.target.files[0];
                this.read(image);

            },

            cancel(){
                this.avatar = this.user.avatar;
                this.loaded = false;
            },
            upload()
            {
                axios.post('/upload', {'image': this.avatar})
                    .then(res => this.$toasted.show('Avatar is uploaded ! YPA',
                        { type: 'success'})
                    )
            },

        }
    }
</script>

<style scoped>

</style>
