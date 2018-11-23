<template>
    <div>
        <!--<img :src="croppedImage" alt="">-->
        <div v-if="!cropped">
            <vue-avatar
                :width=200
                :height=200
                :border=1
                ref="vueavatar"
                @vue-avatar-editor:image-ready="onImageReady"
                image="https://vuejs.org/images/logo.png"
            >
            </vue-avatar>
            <br>
            <vue-avatar-scale
                ref="vueavatarscale"
                @vue-avatar-editor-scale:change-scale="onChangeScale"
                :width=250
                :min=1
                :max=3
                :step=0.02
            >
            </vue-avatar-scale>
            <br>
            <button v-on:click="saveClicked">Click</button>
        </div>

        <div v-else>
            <img :src="croppedImage" alt="">
            <button @click="StartCropping">Back</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueAvatar from '../Vue-avatar-editor/src/components/VueAvatar.vue'
    import VueAvatarScale from '../Vue-avatar-editor/src/components/VueAvatarScale.vue'

    export default {

        data(){
            return{
                croppedImage: null,
                cropped: false
            }
        },

        components: {
            VueAvatar,
            VueAvatarScale
        },
        methods:{
            StartCropping() {
                this.cropped = false;
            },
            onChangeScale (scale) {
                this.$refs.vueavatar.changeScale(scale)
            },
            saveClicked(){
                let img = this.$refs.vueavatar.getImageScaled();
                this.croppedImage = img.toDataURL();
                this.cropped = true;
            },
            onImageReady(scale){
                this.$refs.vueavatarscale.setScale(scale)
            }
        }
    }
</script>

<style scoped>

</style>
