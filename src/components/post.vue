<template>
    <div>
        <h1>Add Record</h1>
        <form @submit="submit_func" method="post">
            <input type="text" placeholder="Enter title" v-model="title"> <br>
            <input type="text" placeholder="Enter author" v-model="author"><br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'post_1',
    data(){
        return {
            title:null,
            author:null
            }
            
        },
    methods:{
        submit_func(e){
            axios.post(`http://localhost:3000/posts`,{title:this.title,author:this.author}).then(response=>{
                console.log("response",response)
            })
            e.preventDefault();
        }
    }
}
</script>