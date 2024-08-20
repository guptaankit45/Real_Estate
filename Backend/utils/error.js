export const errorHandler = (statusCode, message) => {
<<<<<<< HEAD
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
=======
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  };
  
>>>>>>> 01f92711383d0342ee8bcaa74299fefeb295dd90
