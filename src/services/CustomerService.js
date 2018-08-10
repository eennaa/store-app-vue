const customers = [
  {id: 1, firstName:"Pera", lastName:"Peric", email:"pperic@mail.com"},
  {id: 2, firstName:"Vera", lastName:"Veric", email:"vveric@mail.com"},
  {id: 3, firstName:"Gera", lastName:"Geric", email:"ggeric@mail.com"},
  {id: 4, firstName:"Kera", lastName:"Keric", email:"kkeric@mail.com"},
  {id: 5, firstName:"Rera", lastName:"Reric", email:"rreric@mail.com"},
]

class CustomerService {
    list(){
      return customers;
    }

    remove(customer){
      let indexOfCustomer = this.customers.indexOf(customer);
      this.customers.splice(indexOfCustomer, 1);
    }
  }


export const customerService = new CustomerService;
/// ako je fajl sa samo jednom funkciom onda pisem export default funkcija(){ return ....}

///// tamo gde hocu da koristim: import { customerService } from '../sevices/CustomerSevice.js'
//// pa onda posle mogu da koristim kao customerService.IMEMETODE