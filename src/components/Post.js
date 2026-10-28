import React from "react";

class Post extends React.Component
{
    render()
    {
        return (
            <fieldset key={this.props.id}>
                <legend style={{ fontWeight: "bold" }}>{this.props.title}</legend>
                <p>{this.props.description}</p>
            </fieldset>
        )
    }
}

export default Post;