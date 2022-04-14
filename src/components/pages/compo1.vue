<template>
    <div>
        <h1 class="classhead">Log-In  page</h1>
        
        <div>
            <form @submit="postdata" method="post">
                <div class="class_1">
                <label for="usernamelable">Username</label>
                <input type="text"  id="usernamelable" placeholder="Enter username" v-model="user"><br>
                </div>
                <br>
                <div class="class_1">
                <label for="passwordlable">Password</label>
                <input type="password"  id="passwordlable" placeholder="Enter password" v-model="password">
                </div>
                <br>
                <div class="class_1">
                    <button>Submit</button>
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Home_1',
    data(){
        return {
            user:null,
            password:null,
        }
    },
    methods:{
        postdata(e){
            axios.post(`http://localhost:3000/profile`,{user:this.user,password:this.password}).then(response=>{
                console.log("Succesfully data posted",response)
            })
            e.preventDefault();
        }
    }   
}
</script>
<style scoped>
.class_1{
    text-align: center;
}
.classhead{
    text-align: center;
    widows: 20px;
}

</style>