class Home extends React.Component{
    render(){
        return(
            <div>
                <div className='home'>
                        <Statement 
                            bigheading={'IDENTITY'} 
                            content={'A responsive business oriented template with a video background designed by TEMPLATED and released under the Creative Commons License.'}
                        />
                </div>
                <br />
                <br />
                <div className='main'>
                        <Statement 
                            heading={'SEM TURPIS AMET SEMPER'} 
                            content={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'}
                        />
                        <div className='box-container'>
                            <Box title='REACT' paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box title='REACT' paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box title='REACT' paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box title='REACT' paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box title='REACT' paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box title='REACT' paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                        </div>
                        
                        <Parallax />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Statement 
                            heading={'FAUCIBUS CONSEQUAT LOREM'} 
                            content={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'}
                        />
                        <div className='box-container'>
                            <Box paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                            <Box paragraph={'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'} />
                        </div>
                </div>
            </div>   
        )
    }
}