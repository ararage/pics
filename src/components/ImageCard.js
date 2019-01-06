import React from 'react';

class ImageCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
       const height = this.imageRef.current.clientHeight;
       const spans = height + 10;
       this.setState({spans});
    };

    render(){
        const {id, description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    key={id}
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;