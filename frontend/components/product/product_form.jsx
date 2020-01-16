import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign( {}, { photoFile: null, photoUrl: null} , this.props.product)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }


    // componentDidMount() {
    //     console.log(this.props)
    // }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[user_id]', this.state.user_id);
        formData.append('product[category]', this.state.category);
        formData.append('product[quantity]', this.state.quantity);
        if (this.state.photoFile === "") {
            this.setState({ photoFile: null })
        }
        if (this.state.photoFile) {
            formData.append('product[photo]', this.state.photoFile);
        }

        // if (this.state.photoFile) {
        //         formatData.append('product[photo]', photoFile);
        //     }

        this.props.processForm(formData)
            .then(payload => {
                this.props.history.push(`/products/${payload.product.id}`)
            });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

        this.setState({ photoFile: file, photoURL: fileReader.result})
        }

        fileReader.readAsDataURL(file);
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        return (
            <div className="product-form">
                <h1>Add a new listing</h1>
                {this.renderErrors()}
                <div className="photo-container">
                    <div className="photo-info">
                        <h2>Photos</h2>
                        <p className="product-p1">Add as many as you can so buyers can see every detail.</p>
                            <div className="photo-list">
                            <p className="product-p2">Use up to ten photos to show your item's most important
                                qualities.
                            </p>
                            <p className="product-p3">
                                Tips:
                            </p>
                            <li>
                                Use natural light and no flash.
                            </li>
                            <li>
                                Include a common object for scale.
                            </li>
                            <li>
                                Show the item being held, worn, or used.
                            </li>
                            <li>
                                Shoot against a clean, simple background.
                            </li>
                        </div>
                    </div>


                    <div>
                        <input type="file"
                            onChange={this.handleFile} 
                        />
                        <h3>Image Preview</h3>
                        {preview}
                    </div>

                </div>

                <form className="detail-container" onSubmit={this.handleSubmit}>
                    <h2>Listing details</h2>
                    <p>Tell the world all about your item and why they'll love it.</p>
                    <label>Title
                        <input type="text" value={this.state.title} onChange={this.update("title")}/>
                    </label>
                    
                    <label className="detail-select">Category
                            <select id="category" 
                                value={this.state.category}
                                onChange={this.update("category")}>
                                <option value="default">--Select a Category--</option>
                                <option value="jewelry & accessories">Jewelry & Accessories</option>
                                <option value="clothing & shoes">Clothing & Shoes</option>
                                <option value="home & living">Home & Living</option>
                                <option value="toys & entertainment">Toys & Entertainment</option>
                                <option value="art & collectibles">Art & Collectibles</option>
                                <option value="craft supplies">Craft Supplies</option>
                                <option value="vintage">Vintage</option>
                            </select>
                    </label>
    
                    <label>Quantity
                            <input type="number" value={this.state.number} onChange={this.update("quantity")}/>
                    </label>

                    <label>Price
                        <input type="number" value={this.state.price} 
                            onChange={this.update("price")} 
                            placeholder="0.00"/>
                    </label>

                    <label>
                        Description
                        <div id="description">
                            <textarea id="details" value={this.state.description} onChange={this.update("description")}></textarea>
                        </div>
                    </label>

                    <div className="submission-buttons">
                        <input type="submit" value="Save and Continue"/>
                    </div>

                </form>
            </div>

        );
    }

};


export default withRouter(ProductForm);