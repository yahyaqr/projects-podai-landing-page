import { defineStore } from 'pinia';
import { loginUser, logoutUser, fetchCurrentUser, registerUser } from '../services/authService';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null, // Current user data
    token: localStorage.getItem('authToken') || null, // Persisted token
    loading: false, // Loading state for async actions
    error: null, // Error message
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    // Register action
    async register(userData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await registerUser(userData);
        console.log('Registration successful:', response);
        return { success: true, message: response.message }; // Return success response
      } catch (err) {
        this.error = err.response?.data?.message || 'Registration failed';
        console.error('Registration Error:', err.message || this.error);
        return { success: false, error: this.error }; // Return failure response
      } finally {
        this.loading = false;
      }
    },

    // Login action
    async login(credentials) {
      this.loading = true;
      this.error = null;
      try {
        const { user, token } = await loginUser(credentials);
        this.user = user;
        this.token = token;
        localStorage.setItem('authToken', token); // Persist token
      } catch (err) {
        this.error = err.response?.data?.message || 'Login failed';
        console.error('Login Error:', err.message || this.error);
      } finally {
        this.loading = false;
      }
    },

    // Logout action
    async logout() {
      this.loading = true;
      try {
        if (this.token) {
          await logoutUser(this.token);
        }
        this.clearAuth(); // Clear user and token
      } catch (err) {
        this.error = err.response?.data?.message || 'Logout failed';
        console.error('Logout Error:', err.message || this.error);
      } finally {
        this.loading = false;
      }
    },

    // Fetch the currently logged-in user
    async fetchUser() {
      if (!this.token) return; // Skip if no token
      this.loading = true;
      try {
        const user = await fetchCurrentUser(this.token);
        this.user = user;
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to fetch user';
        console.error('Fetch User Error:', err.message || this.error);
        this.logout(); // Logout if fetch fails
      } finally {
        this.loading = false;
      }
    },

    // Clear authentication state
    clearAuth() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('authToken'); // Remove token
    },
  },
});
