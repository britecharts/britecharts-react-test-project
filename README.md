# Britecharts React Test Project

We want to have a small example project showing the different ways Britecharts-React can be added to our user's project.

## Goals
This project will serve us in two ways:
* It will demonstrate different installation ways for our users
* It will help us test that those different bundling targets are working properly

## Approach
This is a simple [Create-react-app](https://github.com/facebookincubator/create-react-app) with a donut component loaded in different ways, showing how to bring in Britecharts-react through the different methods:

* Using the CDN links
* Using NPM with the whole bundle
* Using NPM with individual umd files
* Using NPM with individual commonjs files
* Using NPM and webpack using the esm files
