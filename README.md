# Britecharts React Test Project

We want to have a small example project showing the different ways Britecharts-React can be added to our user's project.

## Goals
This project will serve us in two ways:
* It will demonstrate different installation ways for our users
* It will help us test that those different bundling targets are working properly

## Approach
This is a simple [Create-react-app](https://github.com/facebookincubator/create-react-app) with a donut component loaded in different ways, showing how to bring in Britecharts-react through the different methods:

Using NPM
* with the whole bundle importing as ES205
* with the whole bundle importing as CommonJS
* with individual esm modules from lib
* with individual umd files from lib
* with individual commonjs files from lib

## Installation
Follow these steps:
1. Clone the repo
1. Install dependencies with `yarn`
1. Run demo with `yarn start`
1. Navigate to localhost:3000