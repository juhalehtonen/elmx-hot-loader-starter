# Elm(x) Hot Loader Starter Kit

A basic [Elm 0.17](http://www.elm-lang.org/install) application webpack starter kit that comes with hot loading and support for [elmx](https://github.com/pzavolinsky/elmx), a JSX-like parser for Elm.

This brings together multiple libraries and puts sprinkles on top, like a delicious banana split made out of code.

**What this starter kit does:**

- makes it easy to start a new, scaleable Elm project
- provides awesome hot-reloading, which means when you change code the app updates *without losing state*
- automatically watch and compile `.elm` and `.elmx` file without polluting your working folder with build files
- no grunting or gulping required (but feel free to make noises if you like)
- allows you to use JSX-like syntax in Elm. That means you don't have to write code like this:

```elm
view model =
  div [ style [ ('background-color', 'red') ]
    [ p [ style [ ('color', 'yellow') ] [ text model.greeting ]
    ]
```

Instead, you can write code like this:

```html
view model =
  <div style="background-color: red">
    <p style="color: yellow">{= model.greeting}</p>
  </div>
```

That's way better, isn't it?

## Installation Requirements

In order to use this starter kit, you have to have a couple of things installed. Specifically, these things:

* [Elm 0.17](http://elm-lang.org/install) - You must use 0.17. It won't work with anything else, and you'll be sad.
* [Node.js](https://nodejs.org/en/) - I'm not sure what version you need, I don't pay attention to node except for `npm`. I have v5.6.0 if that helps.

## Getting Started

This starter kit is intended for you to use as a baseline for your own projects. There are many ways to do this, here's one:

```shell
# clone this repository
» git clone https://github.com/bbugh/elmx-hot-loader-starter.git <your_project_name>
» cd <your_project_name>

# install node dependencies
» npm install

# create your own git repository
» rm -rf .git
» git init
```

Be sure to change the contents of `elm-package.json` to reflect your project's information! It's fine to leave `package.json` how it is, but feel free to change it if you'd like. I won't tell.

## Usage

It works like any standard Elm project. You do not have to use the `Components` folder, it's there for demonstration purposes. Here's some PROTIPs:

- Put your main Elm app code in `Main.elmx`.
- Put your ports and Elm initialization code in `index.js`.
- Adjust any HTML in `index.html`.
- Anything `*.elm` and `*.elmx` in the `src` folder will be compiled down to `index.js`. Organize as you prefer.

See [`src/Components/Counter.elmx`](src/Components/Counter.elmx) for a demonstration of how to use `elmx`. The syntax is a little different than JSX, so be sure to study the [elmx README](https://github.com/pzavolinsky/elmx) if you haven't used it before. It's basically just HTML with some squiggly braces.

`App.elm` is an entry point, there shouldn't be any need to change it unless you need `programWithFlags`.

If you're curious, elmx assets are compiled to `elm-stuff/build-artifacts/elmx-compile`

### Running in Development

You'll want to do this while you're developing:

```shell
npm run dev
```

This starts a hot loading server at  http://localhost:8000. Open it in your browser for a chance to win fabulous prizes.

### Building for production

When you're ready to share your brilliant work with the world, this is what you'll want to do.

```shell
npm run build
```

This creates a `./dist` folder with complete production-ready files. You can do whatever you want with the files. I recommend using them to start a successful business.

## Contributing

1. Fork!
2. Pull request!!
3. [Get accepted!!!](https://blog.newrelic.com/2014/05/05/open-source_gettingstarted/)
4. Success!!!!

## Acknowledgements

Special thanks to [@fluxxu](https://github.com/fluxxu) and [@vic](https://github.com/vic) for their work on their starter templates that this is based on: [elmx-webpack-preloader](https://github.com/vic/elmx-webpack-preloader) and [elm-hot-loader-starter](https://github.com/fluxxu/elm-hot-loader-starter). They're the giants whose shoulders I'm standing on.

Thanks to [@pzavolinsky](https://github.com/pzavolinsky) for making [elmx](https://github.com/pzavolinsky/elmx) and [atom-language-elmx](https://github.com/pzavolinsky/atom-language-elmx). Trying to do HTML in Elm made me sad, but now I am happy with Elmx!

Thanks to [@evancz](https://github.com/evancz) for making Elm. I can finally stop writing JavaScript! Hallelujah!

And thank *you* for reading this far.
