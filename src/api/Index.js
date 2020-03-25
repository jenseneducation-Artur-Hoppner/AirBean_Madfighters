import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
  });


  async function getMenu() {
    try {
      const response = await API.get('/api/beans');
      console.log(response.data.menu);
      const menuData = response.data.menu;
      return menuData
    } catch (err) {
      console.error(err);
    }
  }

getMenu()


async function postOrder() {
    try {
    const response = await API.post('/api/beans')
      console.log(response.data);
    const orderData = response.data
        return orderData
      } catch (err) {
        console.log(err)
      }
}

postOrder()



// module.exports.getMenu()
// module.exports.postOrder()
