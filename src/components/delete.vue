<template>
    <div>
        <h1>Delete records</h1>
        <table border="line">
            <tr>
                <td>id</td>
                <td>title</td>
                <td>author</td>
            </tr>
            <tr v-for="i in user" :key="i.id">
                <td>{{i.id}}</td>
                <td>{{i.title}}</td>
                <td>{{i.author}}</td>
                <td><button v-on:click="delete_data(i.id)" >Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Delete_1',
    data(){
        return {user:null}
    },
    methods:{
        getdata(){
            axios.get('http://localhost:3000/posts').then(response=>{
                console.log(response);
                this.user=response.data
        })
        },
        delete_data(id){
            axios.delete(`http://localhost:3000/posts/`+id).then(response=>{
                console.log(response);
                this.getdata();
            })
        }

    },
    mounted(){
        this.getdata();


    }
}
</script>  