Videos Finder
===

## Getting Started

Guide to execute VideosFinder in a local machine.  
I use the dependency ```googleapis``` to make the call.  

## Enviroment Variables

Create ".env" file inside /server to use Youtube API 

```
YOUTUBE_API_KEY=TOKEN
```

## Tests

- I use ```jest --watchAll``` to keep tests running while I'm coding, so I have to login as sudo.

```
$ cd server
$ npm test
```

## Development

### Run project

```
$ cd server
$ npm run dev
```

The server side is in ```localhost:5000```  
The client side is in ```localhost:8080```

## TO DO 
- It's not 100%;
- I tried to follow **Single Responsabilty** principle and **Open/Closed** principle from SOLID, but some parts are still together, nothing that a calm refactoring and a second look doesn't solve;
- There is some issue with my algorithm of organize videos to watch, I guess it's something i have missed, my bad, sorry! The tests are working fine; maybe if I add more tests I would have a better feedback of what's going on.

