export const validateStory = (story) => {
    if (story.length < 3) {
      return 'Story must be at least 3 characters long';
    }
    return '';
  };
  