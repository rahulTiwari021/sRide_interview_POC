Following are the details about the primeDate POC:

#Project setup:
1. Clone the project from my github repo.
2. After cloning run command 'npm install' to install all the dependencies required for this project.

#Below are the list of folders in my application with explanation:

1. api_helpers: Dedicated folder for making any REST API calls, it has API_helper.js file which accepts endpoints(URL) and returns the response from the server.
2. routes: Dedicated folder for routes in future if we have different routes we can keep in this folder to increase the modularity of the project. For now it has prime_data_route.js file which has one get method with '/getWeatherResponseIfCurrentDateIsPrime'
which returns the response of weather if current day is prime.
3. schema-model: Dedicated folder for schema so that if in future we have lots of models we can keep it in this folder. I did this again to increase the modularity of project.
It has prime_date_schema.js file which defines the primeDate object which will be stored in mongodb.
4. test: test folder contains all the different test cases. I have used MOCHA for testing my application.
5. utils: I have created utils folder because I wanted to keep all the hepler tools in it which has a function to check if a number is prime or not.
 for e.g. we can keep codes like addition of two number, find square root, isPrime, etc under this folder.
This will help us to keep all the helper tools at once place and to use it whenever it is required.

#Note: I have used day to check if it is prime or not as it was mentioned in the mail.
I have also done test cases using mocha as discussed with Amit Sir.