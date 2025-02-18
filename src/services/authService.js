import axios from 'axios';

// Base URL for your server
const BASE_URL = 'http://localhost:5000/api/auth';

// Register a new user
export async function registerUser(userData) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data; // Response with user data and success message
  } catch (error) {
    console.error('Registration failed:', error.response?.data?.message || error.message);
    throw error.response?.data || { message: 'Registration failed' };
  }
}

// Login user
export async function loginUser(credentials) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data; // { user, token }
  } catch (error) {
    console.error('Login failed:', error.response?.data?.message || error.message);
    throw error.response?.data || { message: 'Login failed' };
  }
}

// Logout user
export async function logoutUser(token) {
  try {
    await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error('Logout failed:', error.response?.data?.message || error.message);
    throw error.response?.data || { message: 'Logout failed' };
  }
}

// Fetch current user
export async function fetchCurrentUser(token) {
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // User data
  } catch (error) {
    console.error('Fetching current user failed:', error.response?.data?.message || error.message);
    throw error.response?.data || { message: 'Failed to fetch current user' };
  }
}
