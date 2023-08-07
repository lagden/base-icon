# @tadashi/base-icon

Everything you need to build an icon library, powered by [`@steeze-ui/icons`](https://github.com/steeze-ui/icons).


## Creating a project

Run the command below to create a skeleton project.

```bash
# create a new project in the current directory
npx tiged lagden/base-icon#main my-icon-project
cd my-icon-project
npm install
```


## Building

Once you've created a project, put the `svg` files into `svg/raw` directory.

⚠️ Warning

The file names must be respect the `kebab-case` convention.

---

After that, run the command:

```bash
npm run build:icons
```

The command will generate:

- `svg/optimized` directory
- `themes/default` directory
- `src/lib/index.ts` file
- `src/lib/types.d.ts` file

You can see the generated icons by running the command:

```bash
npm run dev
```


## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` propertie. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```


## Usage

See an example how to use the icon library in your project.  
https://svelte.dev/repl/fd948eca90d74e6c960503acd5972268


## Donate ❤️

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](https://github.com/lagden)
MIT © [Justin Voitel](https://github.com/steeze-ui/icons)
