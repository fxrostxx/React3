import React from "react";

class Hello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            text: "Hello",
            button: "Translate"
        }
    }
    translate = () =>
    {
        this.setState({text: this.state.text === "Hello" ? "Привет" : "Hello"});
        this.setState({button: this.state.button === "Translate" ? "Перевести" : "Translate"});
    }
    render()
    {
        return (
            <div>
                <h2>{this.state.text}</h2>
                <button onClick={this.translate}>{this.state.button}</button>
            </div>
        )
    }
}

export default Hello;