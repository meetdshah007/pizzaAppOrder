# PizzaOrderApp  

## <a href="https://blissful-goldberg-1da1f9.netlify.com/" target="_blank">Demo</a>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Steps to Run the APP

`1. git clone https://github.com/meetdshah007/pizzaAppOrder.git`
`2. cd pizzaOrderApp && npm i`
`3. ng serve --open`

Note: Make sure you are on latest angular cli if not please install `npm install -g @angular/cli`.

## Pages, Modules & Functionalities

1. Home Page Displays the List, You can search, Filter the List.
2. Pressing + adds Item to Order and No. of Items shown at Top next to Cart button.
3. Order Page is the Cart where your all items stored you can place order from there.
4. Removing last quantity results the Order removal. (pressing '-' when qty is 1).
5. You can apply Discounts to the Order at the moment following codes works only `SAVE10`, `SAVE20` to get 10% & 20% discounts.
6. Finally Making Place order Success Modal appears and route back to HOME Page.

## Concepts Implemented in Current APP.
1. Angular Material for component & Angular Bootstrap For Layout.
2. Ajax Communication.
3. Routing events Subscription to listen URLs.
4. Parent & Child Components, Sibling Components Communications using Services & Input/Output Methods.
5. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
