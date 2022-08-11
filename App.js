import React from 'react'
import RenderAnimals from './components/RenderAnimals'
import AddFreeloadingAnimal from './components/AddFreeloadingAnimal'
import { v4 as uuid } from 'uuid'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            animals : []
        }
        this.editAnimal = this.editAnimal.bind(this)
        this.deleteAnimal = this.deleteAnimal.bind(this)
        this.addAnimal = this.addAnimal.bind(this)
    }
    componentDidMount(){
        let thoseAnimals = [{id:1, type:"waterbuffalo"}, {id:2, type: "mongoose"}, {id:3,type:"sewer rat"}]
        this.setState({
            ...this.state,
            animals : thoseAnimals
        })
    }
    editAnimal(creature){
        //edit is map
        let otherAnimals = this.state.animals.map(animal=>{
            if(animal.id === creature.id){
                animal.type = creature.type
            }
            return animal
        })
        this.setState({
            ...this.state,
            animals : otherAnimals
        })
    }
    deleteAnimal(id){
        //filter to delete
        let oneLessAnimal = this.state.animals.filter(animal=>animal.id !== id)
        this.setState({
            ...this.state,
            animals : oneLessAnimal
        })
    }
    addAnimal(animal){
        //add id to animal object
        animal.id = uuid()
        //concat the state array
        this.setState({
            ...this.state,
            animals : [animal, ...this.state.animals]
        })
    }
    render(){
        let seeTheAnimals = this.state.animals.map(animal=><RenderAnimals deleteAnimal={this.deleteAnimal} animal={animal} editAnimal={this.editAnimal} key={animal.id}/>)
        return(
            <React.Fragment>
                <AddFreeloadingAnimal addAnimal={this.addAnimal}/>
                { this.state.animals < 1 ? <h3>All the animals left!</h3> : seeTheAnimals}
            </React.Fragment>
        )
    }
}

export default App