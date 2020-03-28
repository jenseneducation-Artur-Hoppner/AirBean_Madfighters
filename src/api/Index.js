import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
  });


  async function getMenu() {
    try {
      const response = await API.get('/beans');
      console.log(response.data.menu);
      const menuData = response.data.menu;

      // console.log(response.data.menu.constructor);

      return menuData
    } catch (err) {
      console.error(err);
    }
  }

// getMenu()


async function postOrder() {
    try {
    const response = await API.post('/beans')
      // console.log(response.data);
    const orderData = response.data

        // console.log(response.data.constructor);

        return orderData
      } catch (err) {
        console.log(err)
      }
}

postOrder()


export { postOrder, getMenu }


