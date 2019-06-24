---
title: Axios
date: "2019-06-24"
author: maximilianoh
---

# Axios
Axios is an open source Javascript library that allows us to make HTTP requests, that works in both Browser and Node.js platforms.

### Install
Axios can be installed for our Node.js project or it can pull from a CDN (Content Delivery Network) in the traditional way:

#### Node
```javascript
    $ npm install axios //option 1
    $ yarn add axios //option 2
```

Import:
```javascript
    const axios = require('axios'); //option 1
    import axios from 'axios';      //option 2

```

#### CDN
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
    *Import not needed: is in window object browser
```

### Do Request
Request can be done in two ways: Asynchronous functions or Synchronous functions (async/await). The two ways will be shown in all examples.

All request examples are tested on https://jsonplaceholder.typicode.com/. JSONPlaceholder is a web service that offers REST API endpoints for example JSON data.


The most important configuration option can be set in axios:
```javascript
        const CancelToken = axios.CancelToken;
        let source = CancelToken.source();
        let configuration={   
            // `method` is the request method to be used when making the request
            method: 'get', // default 
            // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
            baseURL: 'https://jsonplaceholder.typicode.com/',
            // `headers` are custom headers to be sent
            headers: {'content-type': 'application/json; charset=utf-8'},		
            // `params` are the URL parameters to be sent with the request
            params: {id: 1},
            // `data` is the data to be sent as the request body
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            data: {firstName: 'Fred'},
            // `timeout` specifies the number of milliseconds before the request times out.
            // If the request takes longer than `timeout`, the request will be aborted.
            timeout: 1000, // default is `0` (no timeout)
            // `withCredentials` indicates whether or not cross-site Access-Control requests
            // should be made using credentials
            withCredentials: false, // default
            // `onUploadProgress` allows handling of progress events for uploads
            onUploadProgress: function (progressEvent) {
                // Do whatever you want with the native progress event
            },
            // `onDownloadProgress` allows handling of progress events for downloads
            onDownloadProgress: function (progressEvent) {
                // Do whatever you want with the native progress event
            },
            // `cancelToken` specifies a cancel token that can be used to cancel the request
            // (see Cancellation section below for details)
            cancelToken: new CancelToken(function (cancel) {
            })
        }
        axios.get('/users',configuration)
        .then(response => {
            console.log(response)	
        })
        .catch(response => {
            console.log(response)
        });
```

A response with this format is returned in every request.
```javascript
    {
        // `data` is the response that was provided by the server
        data: {},
        // `status` is the HTTP status code from the server response
        status: 200,
        // `statusText` is the HTTP status message from the server response
        statusText: 'OK',
        // `headers` the headers that the server responded with
        headers: {},
        // `config` is the config that was provided to `axios` for the request
        config: {},
        // `request` is the request that generated this response
        request: {}
    }
```
Generally, we focus only on the data.

#### Axios Get
Get request is as simple as like this:
```javascript
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data);
        })
        .catch(thrown=>{
            console.log(thrown);
        });
```
Catch Promise can be caught the error from bad request or down server.

```javascript
    axios.get('https://jsonplaceholder.typicode.com/userFail')
    .then(response => {
        console.log(response.data);
    })
    .catch(thrown=>{
        console.log(thrown);
    });
```

#### Axios Get (async/await)
Async/await allows us to program using asynchronous requests in a synchronous manner.
Axios look more clean with async/await.

```javascript
    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    try{
        console.log(response.data);
    }
    catch(thrown){
        console.log(thrown);
    }
```

#### Axios Post
Post Request needs a object to save, but is the same as Get request.

```javascript
    let objectExample={
            "userId": 1,
            "title": "title example",
            "body": "body example"
    };
    axios.post('https://jsonplaceholder.typicode.com/posts',objectExample)
    .then(response => {
        console.log(response.data);
    })
    .catch(thrown=>{
        console.log(thrown);
    });
```

#### Axios Post (async/await)
Synchronous way:
```javascript
    let objectExampleChange={
            "userId": 1,
            "id": 1,
            "title": "title example",
            "body": "body example"
    };
    let response = await axios.post('https://jsonplaceholder.typicode.com/posts/',objectExampleChange);
    try{
        console.log(response.data);
    }
    catch(thrown){
        console.log(thrown);
    }
```

#### Axios Put
Put Request needs a object to update and ID's object, but is the same as Get request.
```javascript
    let originalObject={
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et..."
    };
    let objectExampleChange={...originalObject,"body": "body example"};
    axios.put('https://jsonplaceholder.typicode.com/posts/'+originalObject.id,objectExampleChange)
    .then(response => {
        console.log(response.data);
    })
    .catch(thrown=>{
        console.log(thrown);
    });
```    

#### Axios Put (async/await)
Synchronous way:
```javascript
    let originalObject={
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et..."
    };
    let objectExampleChange={...originalObject,"body": "body example"};
    let response = await axios.put('https://jsonplaceholder.typicode.com/posts/'+originalObject.id,objectExampleChange);
    try{
        console.log(response.data);
    }
    catch(thrown){
        console.log(thrown);
    }
```


#### Axios Delete
Delete Request needs only the ID in the url, but is the same as Get request.
```javascript
    let originalObject={
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit..."
    };
    axios.delete('https://jsonplaceholder.typicode.com/posts/'+originalObject.id)
    .then(response => {
        console.log(response);
    })
    .catch(thrown=>{
        console.log(thrown);
    });
``` 


#### Axios Delete (async/await)
Synchronous way:
```javascript
    let originalObject={
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit...."
    };
    let response = await axios.delete('https://jsonplaceholder.typicode.com/posts/'+originalObject.id);
    try{
        console.log(response);
    }
    catch(thrown){
        console.log(thrown);
    }
```


#### Axios Cancel
Axios can cancelled a request using a cancel token in our code.
```javascript
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    let cancel=true;
    let objectConfigAxios={cancelToken: source.token};
    let objectExample={
            "userId": 1,
            "title": "title example",
            "body": "body example"
    };
    if (cancel) source.cancel('Request canceled');
    axios.post('https://jsonplaceholder.typicode.com/posts',objectExample,objectConfigAxios)
    .then(response => {
        console.log(response.data)
    })
    .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log(thrown.message);
        } else {
            console.log(thrown)
        }
    });
```
Synchronous way:
```javascript
async functionPost(){
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        let cancel=true;
        let objectConfigAxios={cancelToken: source.token};
        let objectExample={
                "userId": 1,
                "title": "title example",
                "body": "body example"
        };
        if (cancel) source.cancel('Request canceled');

        try {
            let response = await axios.post('https://jsonplaceholder.typicode.com/posts',
                                objectExample,objectConfigAxios);
            console.log(response.data)
        } catch(thrown) {
            if (axios.isCancel(thrown)) {
                console.log(thrown.message);
            } else {
                console.log(thrown)
            }
        };
    }
```

#### Axios Multiple Request
Finally, axios can done multiple concurrent requests
```javascript
    getUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    } 
    getUserPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }
    getUserComments() {
        return axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    }

    callAllAxios(){
        axios.all([getUsers(), getUserPosts(),getUserComments()])
        .then(axios.spread(function (users, posts,comms) {
            console.log(users);
            console.log(posts);
            console.log(comms)
            // All requests are now complete
        }))
        .catch(function (thrown) {
            console.log(thrown)
            // One o more requests are not complete
        });
    }
```

Synchronous way:
```javascript
    async getUsers() {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
    } 
    async getUserPosts() {
        return await axios.get('https://jsonplaceholder.typicode.com/posts')
    }
    async getUserComments() {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    }
    async callAllAxios(){
        try{
            let returnData=await axios.all([getUsers(),getUserPosts(),getUserComments()]);
            let users=returnData[0];
            let posts=returnData[1]
            let comms=returnData[2]
            console.log(users);
            console.log(posts);
            console.log(comms);
        }
        catch(thrown){
            console.log(thrown);
        }      
    }

```

CRUD full example: https://github.com/maximilianoh/AxiosReacTable