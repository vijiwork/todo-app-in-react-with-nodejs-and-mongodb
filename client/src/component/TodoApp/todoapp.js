import React, { Component } from 'react';
import "./todoapp.css";
import { faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default class totdoapp extends Component {
   
    state={
        id:0,
        ivalue:"",
        items:[],
        isEdit:false,
        item_obj:{}
    }

    componentDidMount(){
        this.getTodoList();
    }

    changeInput=(e)=>{
        this.setState({
            ivalue:e.target.value
        });
    }

    addItem=async()=>{
        //  items: [...this.state.items,ivalue],
        let {id,ivalue,items,isEdit} =this.state;
        if(isEdit===false){
            let itm={todo_id:items.length+1,todo_value:ivalue,active:true};
            const resp = await axios.post('api/v1/todos/savetodo', itm);
            if(resp){
                await this.getTodoList();
            }
            this.setState({
                ivalue:""
            })
        }
        else{
            let itm={todo_value:ivalue};
            const resp = await axios.put(`api/v1/todos/updatetodo/${id}`, itm);
            if(resp){
                await this.getTodoList();
            }
            // const newState = items.map(obj => {
            //     if (obj.id === id) {
            //       return {id: id, value: ivalue};
            //     }
            //     return obj;
            // });
            this.setState({ ivalue:"",isEdit:false });
        }
        
    };

    deleteItem=async(data)=>{
        let itm={active:false};
            const resp = await axios.put(`api/v1/todos/updatetodo/${data._id}`, itm);
            if(resp){
                await this.getTodoList();
            }

        // this.setState({
        //     items:items.filter((data,index)=>index!==indx)
        // })
    };

    editItem=(item)=>{
        this.setState({ isEdit: true, id: item._id,ivalue:item.todo_value });
    };

    getTodoList=async()=>{
        await axios.get("api/v1/todos/gettodo",  { crossdomain: true }).then(res => {
            this.setState({
                items:res.data.Userdata
            })
        });
    };

    render() {
        const{ ivalue,items,isEdit }=this.state;
        return (
            <div className="container">
                <h1 style={{color:'teal'}}>Todo App</h1>

                <div>
                    <input text="text" onChange={this.changeInput} value={ivalue} placeholder="Enter"></input>
                    { isEdit 
                    ?  <button type="button" onClick={this.addItem}>Update</button>
                    :  <button type="button" onClick={this.addItem}>Add</button>
                }
                
                </div>

                
                <ul>
                   {items.map((data,index)=>(
                       <li key={index}>{data.todo_value}  
   
                       <FontAwesomeIcon className="icon" onClick={()=>this.deleteItem(data)} icon={faTrash} />
                       <FontAwesomeIcon className="icon" onClick={()=>this.editItem(data)} icon={faEdit} />
                       </li>
                   ))}
                </ul>
           
            </div>
        )
    }
}
