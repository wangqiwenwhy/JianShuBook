<template>
     <!-- <div class="right-bar">
            8945626s
     </div> -->
    <section>
        <div v-for="(i,index) in items" :key="index">
            <div class="top-bar" >
                <img class="photo" :src='i.imges'>
            </div>
        </div>
    </section>
</template>

<script>
import imga from "../assets/bar1.png"
import imgb from "../assets/bar2.png"
import imgc from "../assets/bar3.png"
import imgd from "../assets/bar4.png"
export default {
    name:"Bar",
    // props:{
    //     msg:String
    // },
    data(){
        return{
            items:[{
                imges:imga
            },
            {
               imges:imgb
            },
             {
                imges:imgc
            },
             {
                imges:imgd
            }
            ]
        }
    }
}
</script>


<style>
.top-bar{
    width: 100%;
    height: 50px;
    margin-bottom: 8px;
}
.photo{
    height: 100%;
}

</style>

