<template>
  <div>
    <h1>Customers</h1>
    <table class="table" style="background-color: #ffd1f7;">
      <thead style="background-color: #c693c1;" >
        <th>ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Products</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(customer,index) in customers" :key="index">
          <td> {{customer.id}}</td>
          <td> {{customer.firstName}}</td>
          <td> {{customer.lastName}}</td>
          <td> {{customer.email}}</td>
          <td></td>
          <td><button type="button" class="btn btn-info" @click="removeCustomer(customer)">Remove customer</button></td>
        </tr>
      </tbody>
    </table>
    <br> <br>

    <form @submit.prevent >
      <label>First name</label>
      <input v-model="newCustomer.firstName" type="text" placeholder="Stefan"> <br>
      <label>Last name</label>
      <input v-model="newCustomer.lastName" type="text" placeholder="Stefanovic"> <br>
      <label>Email</label>
      <input v-model="newCustomer.email" type="text" placeholder="example@mail.com"> <br>
      <button type="button" class="btn btn-info" @click="addCustomer(newCustomer)">Add new customer</button>
    </form>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js';

export default {
  data(){
    return {
      newCustomer: {},
      customers: customerService.list()
    }
  },

  methods: {
    addCustomer(newCustomer){     
      customerService.add(newCustomer);
      this.newCustomer = {}; 
      
    },

    removeCustomer(customer){
      customerService.remove(customer);
    }
  }
}
</script>

<style>

</style>
