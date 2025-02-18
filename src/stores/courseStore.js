import { defineStore } from 'pinia';
import {
  fetchAllCourses,
  fetchCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../services/courseService';

export const useCourseStore = defineStore('courseStore', {
  state: () => ({
    upcomingCourses: [], // List of upcoming courses
    preRecordedCourses: [], // List of pre-recorded courses
    selectedCourse: null, // Currently selected course
    selectedCourseType: null, // Type of the selected course: 'upcoming' or 'pre-recorded'
    loading: false, // Loading state for async actions
    error: null, // Error message
  }),
  actions: {
    // Fetch all courses and categorize them
    async loadCourses() {
      this.loading = true;
      this.error = null;
      try {
        const courses = await fetchAllCourses();
        // Separate courses into upcoming and pre-recorded based on their type
        this.upcomingCourses = courses.filter((course) => course.type === 'Upcoming');
        this.preRecordedCourses = courses.filter((course) => course.type === 'Pre-recorded');
      } catch (err) {
        this.error = err.message || 'Failed to load courses';
        console.error('Load Courses Error:', err.message || this.error);
      } finally {
        this.loading = false;
      }
    },

    // Fetch a specific course by ID and type
    async selectCourse(id, type) {
      this.loading = true;
      this.error = null;
      try {
        const course = await fetchCourseById(id);
        this.selectedCourse = course;
        this.selectedCourseType = type;
      } catch (err) {
        this.error = err.message || `Failed to fetch course with ID ${id}`;
        console.error('Select Course Error:', err.message || this.error);
      } finally {
        this.loading = false;
      }
    },

    // Create a new course
    async addCourse(courseData) {
      this.loading = true;
      this.error = null;
      try {
        const newCourse = await createCourse(courseData);
        if (newCourse.type === 'Upcoming') {
          this.upcomingCourses.push(newCourse);
        } else if (newCourse.type === 'Pre-recorded') {
          this.preRecordedCourses.push(newCourse);
        }
        return newCourse; // Return newly created course
      } catch (err) {
        this.error = err.message || 'Failed to create course';
        console.error('Add Course Error:', err.message || this.error);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    // Update an existing course
    async editCourse(id, courseData) {
      this.loading = true;
      this.error = null;
      try {
        const updatedCourse = await updateCourse(id, courseData);
        // Update the course in the correct array
        if (updatedCourse.type === 'Upcoming') {
          const index = this.upcomingCourses.findIndex((course) => course.id === id);
          if (index !== -1) {
            this.upcomingCourses[index] = updatedCourse;
          }
        } else if (updatedCourse.type === 'Pre-recorded') {
          const index = this.preRecordedCourses.findIndex((course) => course.id === id);
          if (index !== -1) {
            this.preRecordedCourses[index] = updatedCourse;
          }
        }
        return updatedCourse;
      } catch (err) {
        this.error = err.message || `Failed to update course with ID ${id}`;
        console.error('Edit Course Error:', err.message || this.error);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    // Delete a course
    async removeCourse(id, type) {
      this.loading = true;
      this.error = null;
      try {
        await deleteCourse(id);
        // Remove the course from the correct array
        if (type === 'Upcoming') {
          this.upcomingCourses = this.upcomingCourses.filter((course) => course.id !== id);
        } else if (type === 'Pre-recorded') {
          this.preRecordedCourses = this.preRecordedCourses.filter((course) => course.id !== id);
        }
      } catch (err) {
        this.error = err.message || `Failed to delete course with ID ${id}`;
        console.error('Remove Course Error:', err.message || this.error);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    // Clear the selected course
    clearSelectedCourse() {
      this.selectedCourse = null;
      this.selectedCourseType = null;
    },
  },
});
