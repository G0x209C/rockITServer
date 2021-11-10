import React from 'react';

export default class extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    componentDidMount()
    {
        // do your socket operations here.
        this.props.client.on('heya', (data)=>{});
        this.props.client.action('game:start', {
            connectionID:this.props.client.connectionID,
            name: "Henk",
            room: "AXCVZ"
        });
    }



    render()
    {
        return(
            <div>
            Hey
            </div>
        )
    }
}