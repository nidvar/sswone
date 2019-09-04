class Display extends React.Component{
    constructor(props){
        super(props)
        this.state={
            page:'home',
        }
    }
    home=()=>{this.setState({page:'home'})}
    page1=()=>{this.setState({page:'one'})}
    page2=()=>{this.setState({page:'two'})}
    contact=()=>{this.setState({page:'contact'})}

    display_body=()=>{
        if(this.state.page ==='home'){
            return <Home />
        }else if(this.state.page === 'one'){
            return <h1>Not home</h1>
        }
    }
    render(){
        return(
            <div>
                {/* start **********************************************************************/}
                <div className='navbar'>
                    <p>IDENTITY</p>
                    <ul>
                        <li onClick={this.home}>HOME</li>
                        <li onClick={this.page1}>PAGE 1</li>
                        <li onClick={this.page2}>PAGE 2</li>
                        <li onClick={this.contact}>CONTACT</li>
                    </ul>
                </div>
                {this.display_body()}
                        <br />
                        <br />
                        <br />
                        <br />
                <div className='footer'>


                    <div className='footer-top'>
                        <div className='footerbox boxone'>
                            <h3>ACCUMSAN MONTES VIVERRA</h3>
                            <br />
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                        </div>
                        <div className='footerbox'>
                            <h3>ACCUMSAN MONTES VIVERRA</h3>
                            <br />
                            <p className='line'>Dolor pulvinar sed etiam.</p>
                            <p className='line'>Etiam vel lorem sed amet.</p>
                            <p className='line'>Felis enim feugiat viverra.</p>
                            <p id='last'>Dolor pulvinar magna etiam.</p>
                        </div>
                        <div className='footerbox'>
                            <h3>MAGNA SED IPSUM</h3>
                            <br />
                            <p>Twitter</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Github</p>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <p>© Nidvar. Just another Simple Website.</p>
                    </div>


                </div>
                {/* end **********************************************************************/}
            </div>
        )
    }
}