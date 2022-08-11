import React from 'react'

class AddFreeloadingAnimal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            type : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        let { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.addAnimal(this.state)
        this.setState({
            ...this.state,
            type : ''
        })
    }
    render(){
        return(
            <div>
                <h3>Animals that freeload</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="type" value={this.state.type} onChange={this.handleChange} required/>
                    <button type="submit">Add Animal</button>
                </form>
            </div>
        )
    }
}

export default AddFreeloadingAnimal