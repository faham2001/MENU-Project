import axios from 'axios';

const API_URL = 'http://localhost:5000/api/menus';

export const fetchMenus = () => axios.get(API_URL);
export const addMenu = (menu) => axios.post(API_URL, menu);
export const fetchMenuById = (id) => axios.get(`${API_URL}/${id}`);
