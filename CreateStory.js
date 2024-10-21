import React, { useState } from 'react';
import { validateStory } from '../validations/storyValidation';

const CreateStory = () => {
  const [story, setStory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateStory(story);
    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      // Logic to handle successful story creation
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a Story</h3>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Write your story"
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CreateStory;
