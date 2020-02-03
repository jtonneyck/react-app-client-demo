# Client React Deploy Demo

This is the Client that belongs to the demo about deploying a React app as separate client and back-end. You need to create a .env.production file with the following variable:
```
REACT_APP_API=theBaseUrlYouAreHostingYourAPIon
```
In development you need to call it `.env.development`

In addition you need a `static.json` file in the root directory of your client. The root directory has a singular setting:
```
{
    "root": "./build"
}
```
Now `npm run build`. Now make a commit and push to Heroku. You need to run the build command every time want to redeploy changes. This includes changes in the `.env.production` file. Running all these commands can be a bit annoying. You could add the following script to your package.json file:

package.json
```
{
    ...
    scripts: {
        ...
        "deploy": "npm run build && git commit -am 'deploy' && git push heroku"
    }
    ...
}
```

If you execute `npm run deploy`, npm will run all the commands separated by "&&" in sequence. 

Note, that it's assumed that you know how to deploy an static app with Heroku. If you don't, refer to the deployment lesson of Week 3 (Project 1s).