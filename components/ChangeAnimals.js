import React from 'react'


class ChangeAnimals extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            type: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            id : this.props.animal.id,
            type : this.props.animal.type
        })
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
        this.props.editAnimal(this.state)
        this.props.handleEdit()
        this.setState({
            ...this.state,
            id: '',
            type: ''
        })
    }
    render(){
        console.log("props Change Animal ", this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="type" value={this.state.type} placeholder={this.state.type} onChange={this.handleChange}/>
                <button type="submit">Done</button>
            </form>
        )
    }
}

export default ChangeAnimals