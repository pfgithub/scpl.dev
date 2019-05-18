ScPL is a programming language for Shortcuts that allows you to write shortcuts in text instead of dragging and dropping blocks. ScPL focuses on being easy to pick up and write. [Get Started](https://docs.scpl.dev/gettingstarted)

```scpleditor
ShowResult "Hello ScPL"
ChooseFromMenu items=["Getting Started", "View Documentation"]
Case "Getting Started"
	URL "https://docs.scpl.dev/gettingstarted"
Case "View Documentation"
	URL "https://docs.scpl.dev/"
End Menu
OpenURLs
```

See what your shortcut looks like in ScPL by uploading it in the [ScPL Editor](https://editor.scpl.dev).

# What is ScPL

ScPL lets you write shortcuts in text. Instead of dragging actions around on a small screen in a slow app, you can write text like `ShowResult "My shortcut"` to build long and complex shortcuts.

# Using ScPL with your own editor

ScPL has a plugin for Visual Studio Code with autocompletion, error messages, and hover documentation. [VSCode Extension](https://marketplace.visualstudio.com/items?itemname=pfg.vscode-shortcutslang-extension).

To compile your ScPL code you can use the scpl-cli npm package. `npm install --global scpl-cli`. Then you can run `scpl <filename.scpl> -o <outputfile.shortcut>`

# Contributing

[Github](https://github.com/pfgithub/scpl)

ScPL is written in TypeScript. To install the dev version, clone the git repo and run `yarn install`. Before making a pull request, make sure to run `yarn format` to automatically format your code with prettier and `yarn test` to make sure it passes all the tests.
