# Seasonal Sales

You work as a developer for a big box store.

- [Here](assets/json/products.json) is a JSON representation of a small sample of the products you sell.
- [Here](assets/json/categories.json) is a JSON representation of some of the departments in your stores.

## Requirements

1. :white_check_mark: Build a web page that lists all of the products, the name of the department it's in, and the price.
1. :white_check_mark: Put a `<select>` element at the top of the page that contains all possible values of the `season_discount` key in the categories file.
1. :white_check_mark: As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.
   - _Example_: When "spring" is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.
1. :white_check_mark: The two JSON representations above should be in `products.json`, and `categories.json`. Load both files via XHRs and store the contents in two different JavaScript variables in your code.

# Resources

1. Use [JSON Lint](http://www.jsonlint.com) to validate your JSON documents.