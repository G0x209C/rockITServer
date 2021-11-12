import React from 'react';

export default class extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props.client);
        this.client = props.client;

    }

    connectionStuff()
    {
        // do your socket operations here.
        this.client.on('heya', (data)=>{});
        this.client.action('game:start', {
            connectionID:this.props.client.connectionID,
            name: "Henk",
            room: "AXCVZ"
        });
    }

    componentDidMount()
    {
        this.connectionStuff()
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