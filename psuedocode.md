# Fishing Hooks

## Basic Requirements

<ul>
<li>Use React Hooks to handle state management and lifecycle (no class components, only function components)</li>
<li>Use axios to hit API: http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/</li>
<li>Keep track of what view or page you are currently on with react-router</li>
<li>Block access to any restricted pages or views (conditional render), cannot remove an item from cart that is not currently in the cart, cannot view a cart if there are no items in it]</li>
<li>If the user refreshes the page, their site status, current page/view, and auth token persists.</li>
</ul>
To complete the assignment, you must complete one of the following Paths (on an agile team these would be three different features that can be completed and pulled into dev):

#### Shopping Cart
<ul>
<li>A user can see all the products listed on the products page.</li>
<li>A user can see a product page when they click on a product (from the products page or from their cart).</li>
<li>A user can modify the number of items in their cart.</li>
<li>When the user clicks "add to cart" on a product(s), add it to the cart (A user should be able to add more than 1 item to their cart at a time)</li>
</ul>


## Pseudocode

### Components

#### App/Home Page
    Main landing page for the Fishhooks site

    State
        productList - an array of item objects from the Axios API Call
            id - given
            name - given
            description - given
            type - given
            price - given
            created_at - given
            updated_at - given
            inCart - added



    Methods
        axiosCall - an Axios call to get all the products to be listed in the shop


    Render
        Products - map through array of products to create
        Cart - 


#### ProductsPage
    A page that shows all products

State
    productList - an array of item objects from the Axios API Call
    cart - an array of items to display in the cart, user can add and remove items from this array with a button click



Methods
    axiosCall - an Axios call to get all the products to be listed in the shop

    addToCart - adds a product to the cart array

    removeCart - removes a product from the cart array


Render
Product Name
Add to Cart button


#### ProductPage

Render
    Product Name
    Description
    Cost
    Add to Cart button

#### CartPage

Methods
inCart - a function that maps through the productList array and 
Sum - adds the cost of all products in the cart


Render
Product Name
Product Cost
Remove from cart button
Total: Sum



Nav ???
