The backend is hosted on Vercel:

https://todo-backend-plum.vercel.app/

To run the application on local server clone it first and then run these commands

npm install

npm start

Now add username and password to the MongoDB connection in the index.js file.

You are good to go. You can use Postman to query the endpoints.

For New User Registration: post request based on user Schema

http://localhost:Port/userReg

For Existing User Info: get request with username

http://localhost:Port/userReg

For Password Reset: post request based on user Schema

http://localhost:Port/passwordReset

For Current Password Info: get request with username

http://localhost:Port/passwordReset

For New Task: post request based on user Schema

http://localhost:Port/tasks

For tasks of a user Info: get request with username

http://localhost:Port/tasks

For Current task update: put request based on user Schema

http://localhost:Port/tasks

For Deleting task: put request based on user Schema

http://localhost:Port/tasks/delete



