import React from "react"

const Hello = () => {
        return (
            <div>
                <div style={centerDiv}>
                    <p>Hi,</p>
                    <p>I'm</p>
                    <p>Pedro .</p>
                </div>
                <div style={centerBar}></div>
                <div style={bottomDiv}>
                    <p>Junior Developer .</p>
                    <p>Creative Designer .</p>
                </div>
            </div>
        )
}

const centerDiv = {
    marginLeft: '40%',
    marginTop: '5%',
    textAlign: 'left',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '144px',
    lineHeight: '122px',
    letterSpacing: '-0.10em',
    color: '#000000',
    
}

const centerBar = {
    width: '340px',
    height: '6px',
    marginTop: '1%',
    marginLeft: '40.5%',
    left: '562px',
    top: '645px',
    background: '#000000',
}

const bottomDiv = {
    marginLeft: '40.5%',
    marginTop: '1%',
    textAlign: 'left',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '114.9%',
    letterSpacing: '-0.10em',
    color: '#000000',
    
}

export default Hello