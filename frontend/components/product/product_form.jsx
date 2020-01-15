import React from 'react';
import {withRouter} from 'react-router-dom';


class ProductForm extends React.Component {
    // constructor(props) {
    //     super(props)
        // this.state = Object.assign( {}, { imageFiles: [], imageUrls: []} , this.props.product)
        // this.handleSubmit = this.handleSubmit.bind(this);

    // }


//     componentDidMount() {
//         console.log(this.props)
//     }
//     // update(field) {
//     //     return e => this.setState({
//     //         [field]: e.currentTarget.value
//     //     });
//     // }

//     // renderErrors() {
//     //     return (
//     //         <ul>
//     //             {this.props.errors.map((error, i) => (
//     //                 <li key={`error-${i}`}>
//     //                     {error}
//     //                 </li>
//     //             ))}
//     //         </ul>
//     //     );
//     // }


    render() {
        return (
            <div>something</div>
        );
    }

}


export default withRouter(ProductForm);