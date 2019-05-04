import React, {Component} from 'react';
import './App.css';

import ShortcutPreview from "shortcut-preview";
import {parse, inverse} from "scpl";

class App extends Component<{}, {data: any, text: string}>{
    constructor(props: Readonly<{}>){
        super(props);
        this.state = {data: undefined, text: `ShowResult "Hello ScPL"
ChooseFromMenu items=["Getting Started", "View Documentation"]
Case "Getting Started"
    URL "https://docs.scpl.dev/gettingstarted"
Case "View Documentation"
    URL "https://docs.scpl.dev/"
End Menu
OpenURLs`};
    }
    componentWillMount(){
        this.textareaChanged(this.state.text);
    }
    textareaChanged(value: string){
        let data = parse(value, {make: ["shortcutjson"]});
        this.setState({data: data.shortcutjson, text: value})
    }
    render(){
        return <div><textarea onKeyUp={(e) => this.textareaChanged(e.currentTarget.value)}>{this.state.text}</textarea><ShortcutPreview data={this.state.data}></ShortcutPreview></div>
    }
}

export default App;
