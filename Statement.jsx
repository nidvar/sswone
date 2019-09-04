class Statement extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='statement'>
                <h1 className='bigheading'>{this.props.bigheading}</h1>
                <h1>{this.props.heading}</h1>
                <br/>
                <p>{this.props.content}</p>
            </div>
        )
    }
}