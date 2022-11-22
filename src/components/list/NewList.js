import React, {Component} from "react";
import Element from './element'

class NewList extends Component {
    render() {
        const data = [
            {id:1,Name:"Rakesh",class:"A"},
            {id:2,Name:"Anantha",class:"B"},
            {id:3,Name:"Kamna",class:"C"},
            {id:4,Name:"Yash",class:"A"},
            {id:5,Name:"Divya",class:"B"}
        ]
        const listItems = this.state.items.map((item,index) => <Element key={item.id} value={item}></Element>)
        return (
            <>
             <div>
              {data.map((item) => (
                <p key={item.id}>Name: {item.Name}
                class: {item.class}</p>
              ))}
              </div>
            </>
        )
    }
}

export default NewList