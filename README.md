## Documentation

### Setup

```
npm install
```

And start the development server

```
npm start
```

Now you can go to http://localhost:3000 and see your app!

### Environment variables

Create a `.env` in the root directory and set the following variables. These variables are available in global `config`.

```
APP_NAME=
NODE_ENV=
API_BASE=
```

You can also add `PORT` variable to if you want a different port.

### Scripts

| Script          | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm start`     | Runs project in `development` environment       |
| `npm run build` | Builds the project for `production` environment |
| `npm run clean` | Cleans the `build` directory                    |
