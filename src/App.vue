<template>
   <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            MIN
          </th>
          <th class="text-left">
            MAX
          </th>
          <th class="text-left">
            AVG
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.min">
          <td>{{ item.min }}</td> 
          <td>{{ item.max }}</td>
          <td>{{ item.avg }}</td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components:{
  
  },
  data(){
    return {
      data:{},
            }
  },
  async created(){
  try{ 
        const { data } = await axios.get(`energy_consumption`,{
          params:{
        customer_id: 35,
        machine_id:33,
        startdate:1648139685,
        enddate:1648139782

          }
       
        });
      console.log(data);
      this.data=data
    } 
    catch (err)
    {
      console.log(err);
    }
    

  }
 
}
</script>
<style scoped>

</style>
