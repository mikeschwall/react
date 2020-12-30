import React,{Component} from 'react';

class ImageList extends Component {

    constructor(props) {
        super(props);
        this.imageref = React.createRef();
        this.state = {myheight:[]}
    }

    componentDidMount() {
        if (this.imageref.current) {
            this.imageref.current.addEventListener("load",this.getHeight);
        
        }
    }

    getHeight = () => {
        console.log(this.imageref.current);
        console.log(this.imageref.current.clientHeight);
        
    }

    componentDidUpdate() {
        this.setState({
            myheight:this.imageref.current.clientHeight
        });
    }

    render() {
        const {myimages} = this.props;
        console.log(myimages);
        return (
            <div>
                <ul>
                    {myimages.map((image,index) => {
                        return (
                            <li key={image.id}>
                                <img ref={this.imageref} src={image.urls.thumb}/><br/>
                                {this.state.myheight.map((test) => {
                        return (
                            <div>
                                {test}
                            </div>
                        )
                    })}
                                
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
}

export default ImageList;