import * as React from "react";


export interface HelloProps 
{
    compiler: string;
    framework: string;
}

export default class Hello extends React.Component<HelloProps, {}> 
{
    render() 
    {
        return <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{flexDirection: 'column'}}>
                <div>
                    <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                </div>
                <div style={{width: '640px', background: 'aliceblue'}}>
                    <div style={{width: '1024px'}} >
                    table table 
                    <br/>
                    table table 
                    <br/>
                    table table 
                    <br/>
                    table table 
                    <br/>
                    </div>
                </div>
                <div>bottom</div>
            </div>
        </div>;
    }
}