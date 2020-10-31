import React, { Component } from 'react';

class ListProduct extends Component {
    state = {
        expand: false
    }
    handleExpandetionMenue = () => {
        this.setState({ expand: !this.state.expand })
    }
    render() {
        const { ListProductItem, toggelIcon } = this.props
        return (

            <ul className="list-product-categori-respons"
                style={toggelIcon ? { display: "flex" } : { display: "none" }}
            >
                <span key={ListProductItem.id}>
                    {ListProductItem.titel}
                </span>
                {ListProductItem.submenu.map((item, index) => {
                    if (index < 9) {
                        return (

                            <li key={item.id}>
                                <a href="#">{item.titel}</a>
                            </li>
                        )
                    } else if (this.state.expand) {
                        return (

                        <li key={item.id}>
                            <a href="#">{item.titel}</a>
                        </li>
                        )
                    }
                }
                )}
                
             <i onClick={this.handleExpandetionMenue} class="fa fa-plus-circle">جایزه شما </i>
            </ul>
        );
    }
}

export default ListProduct;