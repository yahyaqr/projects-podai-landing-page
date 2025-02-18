// Utils for Admin.vue

/**
 * Logic to select a course.
 * @param {Ref} selectedCourse - Reactive reference to the selected course.
 * @param {Ref} selectedCourseType - Reactive reference to the selected course type.
 * @param {Object} course - The selected course object.
 * @param {String} type - The course type ("upcoming" or "pre-recorded").
 */
export const selectCourseLogic = (selectedCourse, selectedCourseType, course, type) => {
    selectedCourse.value = course;
    selectedCourseType.value = type;
  };
  
  /**
   * Logic to create a new course.
   * @param {String} type - The course type ("upcoming" or "pre-recorded").
   * @param {Ref} selectedCourse - Reactive reference to the selected course.
   * @param {Ref} selectedCourseType - Reactive reference to the selected course type.
   * @param {Object} courseStore - The Pinia course store.
   */
  export const createNewCourseLogic = async (type, selectedCourse, selectedCourseType, courseStore) => {
    const newCourse = {
      title: `New Course ${type === 'upcoming' ? '(Upcoming)' : '(Pre-recorded)'}`,
      description: '',
      category: 'Default Category',
      type: `${type === 'upcoming' ? 'Upcoming' : 'Pre-recorded'}`,
      price: 'Rp 0',
      program: 'Default Program',
      imageSource: '/images/default-course.jpg',
      eventDate: type === 'upcoming' ? new Date().toISOString().split('T')[0] : null,
      chapters: type === 'pre-recorded' ? [] : null,
      instructors: [],
    };
  
    try {
      const createdCourse = await courseStore.addCourse(newCourse);
      selectedCourse.value = createdCourse;
      selectedCourseType.value = type;
    } catch (error) {
      console.error('Error creating course:', error.message || 'Unknown error');
    }
  };
  
  /**
   * Logic to save content for the selected course.
   * @param {Ref} selectedCourse - Reactive reference to the selected course.
   * @param {Object} courseStore - The Pinia course store.
   */
  export const saveContentLogic = async (selectedCourse, courseStore) => {
    if (selectedCourse.value) {
      try {
        await courseStore.editCourse(selectedCourse.value.id, selectedCourse.value);
        console.log('Course updated successfully.');
      } catch (error) {
        console.error('Error saving course:', error.message || 'Unknown error');
      }
    }
  };
  
  /**
   * Logic to handle saving a course.
   * @param {Object} course - The course object to save.
   * @param {Object} courseStore - The Pinia course store.
   */
  export const handleSaveCourseLogic = async (course, courseStore) => {
    try {
      await courseStore.editCourse(course.id, course);
      console.log('Course saved successfully!');
    } catch (error) {
      console.error('Error saving course:', error.message || 'Unknown error');
    }
  };
  