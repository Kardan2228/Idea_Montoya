# Final project for the React course at CoderHouse (Abrigate Store)

![Alt Text](./public/images/AbrigateStore.gif )
## Sample video of the Abrigate Store online store
Here you can see a preview of the functionalities of the online store.
https://www.loom.com/share/2d1c730851b84334be1cbd3b1dc30d45

## Deploy in vercel

https://idea-montoya-master.vercel.app/
## Structure and operation of the online store

This online store is made up of a main view that has all the existing products in the database.

In the upper part, a NavBar is integrated from which you can obtain filtered views of the products by category.

The presentation of the products is done through cards, which have a general description and a "Details" button.

Clicking or tapping the "Details" button on the product card takes us to an individual view of the product showing the full description of the product, complete with a quantity selector and an "Add" button.

Clicking or tapping the "Add" button displays a notification (Toast) with a thumbnail image, confirming the number of products added to the shopping cart.

After adding the product to the basket, two buttons appear, one to continue shopping and return to the main page and the other to go to the shopping basket.

In the navigation bar in the right corner there is an icon of a shopping basket, through which the content of the shopping basket can also be accessed. The shopping basket has a circular badge that shows the number of products contained in the basket and is completely hidden when the basket is empty.

The shopping cart shows the details of the products that the user has chosen to make their purchase, on the left side of each product there is a trash can that is used to eliminate the products that are not required; It also has a cumulative total and three buttons at the bottom, one to empty the shopping cart, another to complete the purchase and one more to continue shopping.

Clicking or touching the "Finish the purchase" button starts a data validation process; First, a form is shown that requests the name, email and telephone number of the client, which counts each one of the fully validated inputs to avoid that they remain empty, incomplete or that invalid characters are entered, depending on the data requested.

After sending the previously validated customer data, a summary of the purchase order is displayed, ready for review and assignment of its respective purchase folio.

When selecting the "Send order and pay" button, a floating alert appears showing the purchase order folio and the amount to be paid.

When the purchase order alert is closed, the application ends, showing a "Make payment" button that redirects the user to the main page of the online store "/".

**Note:** This app is fully responsive and works on any device.
____

## Libraries used for this project:

### Bootstrap
Used to give some styles to the application, such as buttons, navigation bar and form. https://getbootstrap.com/

### Formik
Used to generate and validate the customer data form for the purchase order. https://formik.org/

### react-router-dom
With this library, efficient navigation between the different views or pages of the project was achieved. https://v5.reactrouter.com/web/guides/quick-start

### sweetalert
Library used to generate the alert that appears in the purchase order view, which shows the order folio, the customer's name and the amount to pay. https://sweetalert.js.org/

### sweetalert2
Library used to display the animated alert that shows the product and quantity that were added to the shopping cart. https://sweetalert2.github.io/
___

## Styles

### CSS modules
It was used to customize the styles in the different modules of the application.

### CSS for JSX
Pure CSS has been embedded within the JSX code to make minor adjustments to styles.

### SASS
It is used as an extension language to be included within CSS modules. https://sass-lang.com/
___
## Backend

### firebase
Non-relational database, used to store the inventory of products, categories and purchase orders. https://firebase.google.com/

___

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
