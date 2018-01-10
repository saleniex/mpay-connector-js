# Getting started

1. Clone from repository

```
git clone https://github.com/saleniex/mpay-connector-js.git
```

2. Install dependencies.

```
npm install
```

3. Create environment config from `.env.dist` and customize settings according received from [Mobilly](https://www.mobilly.lv/pub/lv/).

```
cp .env.dist .env
```

4. Create dist.

```
npm run build
```

5. Run sample application

```
node dist/app.js
```

# Integration in your code

If everything is ok sample application outputs in console link where client's browser needs to be redirected.
Modify `src/app.ts` code in order to perform actual redirecting.