import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers:{
    Authorization: 'Client-ID 5nY2EilsDuC_qcp73N5orr0eedmQ5t4_izxdThGceTc'
  }
})