import React from "react";
import ELementList from "./element";
class MyList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [1,2,3,4,5]
        }
    }
    handler() {
        this.setState({
            items: [6,1,2,3,4,5]
        })
    }
    render() {
        const listItems = this.state.items.map((item,index) => <ELementList key={item.toString()} value={item}></ELementList>)
        return (
            <>
                <div>
                <ul>{listItems}</ul>
                <button onClick={this.handler.bind(this)}>Add Item</button>
                </div>
            </>
        ) 
    }
}
export default MyList