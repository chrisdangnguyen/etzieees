import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


const ProductForm = props => {
    //     this.state = Object.assign( {}, { photoFile: '', photoUrl: ''}, props.product)
    const [productState, setProductState] = useState({...props.product, photoFile: '', photoUrl: '' });

    useEffect(() => {
      if (props.formType === "edit form") {
        props.fetchProduct(props.match.params.productId);
      }
    }, [props.match.params.productId]);

    useEffect(() => {
        setProductState(props.product);
    }, [props.product]);


    function update(field) {
        return e => setProductState({...productState, [field]: e.currentTarget.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', productState.title);
        formData.append('product[description]', productState.description);
        formData.append("product[price]", parseFloat(productState.price).toFixed(2));
        formData.append('product[user_id]', productState.user_id);
        formData.append('product[category]', productState.category);
        formData.append('product[quantity]', productState.quantity);
    
        if (productState.id) {
            formData.append('product[id]', productState.id);
        };
        if (productState.photoFile === "") {
            setProductState({ ...productState, photoFile: null })
        }
        if (productState.photoFile) {
            formData.append('product[photo]', productState.photoFile);
        }

        props.processForm(formData)
            .then(payload => {
                props.history.push(`/products/${payload.product.id}`)
        });
    }

    function handleClear(e) {
        e.preventDefault();
        return setProductState({ ...productState, photoFile: null, photoUrl: null });
    }

    function renderErrors() {
        return (
            <ul>
                {props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="product-errors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    function handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

        setProductState({ ...productState, photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }


    const preview = productState.photoUrl ? <img src={productState.photoUrl} className="photo-preview" /> : null;
    let header;
    // let deleteButton;
    if (props.formType === "edit form") {
        header = "Update listing";
        // deleteButton = <button onClick={handleDelete} className="delete-button">Delete listing</button>
    } else {
        header = "Add a new listing";
    }

    return (
        <div className="product-form">
            <h1>{header}</h1>
            <div className="product-errors">
            {renderErrors()}
            </div>
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


                <div className="upload-container">
                    <input type="file"
                        onChange={handleFile}
                        className="new-photo-container" 
                    />
                    <button onClick={handleClear}>Clear</button>
                    {preview}
                </div>
            </div>

            <form className="detail-container" onSubmit={handleSubmit}>
                <h2>Listing details</h2>
                <p>Tell the world all about your item and why they'll love it.</p>

                <div className="title-container">
                    <div className="title-para">
                        <label>Title</label>
                        <p>Include keywords that buyers would use to search for your item.</p>
                    </div>
                    <input className="title-input" type="text" value={productState.title} onChange={update("title")}/>
                </div>
                
                <div className="category-container">
                    <div className="category-para">
                        <label>Category</label>
                    </div>
                    <select id="category" 
                        value={productState.category}
                        onChange={update("category")}>
                        <option value="default">--Select a Category--</option>
                        <option value="jewelry&accessories">Jewelry & Accessories</option>
                        <option value="clothing&shoes">Clothing & Shoes</option>
                        <option value="home&living">Home & Living</option>
                        <option value="toys&entertainment">Toys & Entertainment</option>
                        <option value="art&collectibles">Art & Collectibles</option>
                        <option value="craftsupplies">Craft Supplies</option>
                        <option value="vintage">Vintage</option>
                    </select>
                </div>      

                <div className="quantity-container">
                    <div className="quantity-para">
                        <label>Quantity</label>
                        <p>For quantities greater than one, this listing will renew automatically until it sells out. You’ll be charged a $0.20 USD listing fee each time.</p>
                    </div>
                    <input className="quantity-input" type="number" value={productState.quantity} onChange={update("quantity")}/>
                </div>

                <div className="price-container">
                    <div className="price-para">
                        <label>Price</label>
                        <p>Factor in the costs of materials and labor, plus any related business expenses. Consider the total price buyers will pay too—including shipping.</p>
                    </div>
                    <input className="price-input" type="number" value={productState.price} 
                        onChange={update("price")} 
                        placeholder="0.00"/>
                </div>

                <div id="description">
                    <div className="description-para">
                        <label>Description</label>
                        <p>Start with a brief overview that describes your item’s 
                            finest features. Shoppers will only see the first few 
                            lines of your description at first, so make it count!
                            <br /> <br /> Not sure what else to say? Shoppers also like 
                            hearing about your process, and the story behind 
                            this item.
                        </p>
                    </div>
                    <textarea id="details" value={productState.description} 
                    onChange={update("description")}></textarea>
                </div>


                <div className="submission-buttons">
                    {/* {deleteButton} */}
                    <input type="submit" value="Save and Continue"/>
                </div>

            </form>
        </div>

    );

};

export default withRouter(ProductForm);