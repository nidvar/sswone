class Statement extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='statement'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}