import axios from 'axios';

// Base URL for your course server
const BASE_URL = 'http://localhost:5000/api/courses';

// Fetch all courses
export async function fetchAllCourses() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Array of courses
  } catch (error) {
    console.error('Failed to fetch courses:', error.response?.data?.message || error.message);
    throw error.response?.data || { message: 'Failed to fetch courses' };
  }
}

// Fetch a specific course by ID
export async function fetchCourseById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data; // Course data
  } catch (error) {
    console.error(`Failed to fetch course ${id}:`, error.response?.data?.message || error.message);
    throw error.response?.data || { message: `Failed to fetch course with ID ${id}` };
  }
}

// Create a new course
export async function createCourse(courseData) {
  try {
    const response = await axios.post(BASE_URL, courseData);
    return response.data; // Newly created course data
  } catch (error) {
    console.error('Failed to create course:', error.response?.data?.message || error.message);
    throw error.response?.data || { message: 'Failed to create course' };
  }
}

// Update an existing course
export async function updateCourse(id, courseData) {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, courseData);
    return response.data; // Updated course data
  } catch (error) {
    console.error(`Failed to update course ${id}:`, error.response?.data?.message || error.message);
    throw error.response?.data || { message: `Failed to update course with ID ${id}` };
  }
}

// Delete a course
export async function deleteCourse(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Failed to delete course ${id}:`, error.response?.data?.message || error.message);
    throw error.response?.data || { message: `Failed to delete course with ID ${id}` };
  }
}
