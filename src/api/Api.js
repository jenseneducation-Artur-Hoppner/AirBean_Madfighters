// API get menu. Then exported to store. Not done yet. Code for store is below.

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
  });

  async function getMenu() {

    try {

      const response = await api.get('beans/');
    //   console.log(response.data.menu);
      const menuData = response.data.menu;
      return menuData
    } catch (error) {
      console.error(error);
    }
  }

getMenu()

module.exports.getMenu()



// Code Bellow: Move to store when done.

// import * as api from '@/api/index.js'
// import {getMenu} from '@/api/index.js'


// actions
    //Get the api here
    //Post the api here