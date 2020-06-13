import React from 'react';

// Using React's Context API to provide a Firebase instance once at the top-level of your 
// component hierarchy

const FirebaseContext = React.createContext(null);

export default FirebaseContext;