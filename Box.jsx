class Box extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='box'>
                <h3>{this.props.title}</h3>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}