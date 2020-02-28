This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## SYNOPSIS

Currently we have an web page that renders a collection of cat pictures using React and collecting the data from [The Cat API](https://thecatapi.com/) website.

### Testing

I decided to use Jest and Enzyme to carry out the tests, as these tools are the best performing tools for React.

I have test driven the code, testing the Lifecycle method component did mount which is an essential method to send the API and recieve the response.

Used the jest test coverage tool to gain visibility over what percentage my code has been tested.

With more time I would have written tests to additionally cover the API alongside the responses I get back. Furthermore, I would have tested the render functionality and tested the outputs that were being rendered after the methods have been run.

### Additional Features to be added

- Add a search feature for the user to find a cat based on the breed and save the image on a new page.
- Create a ratings feature that allows the user to rate their favourite cats that saves these results in a database
