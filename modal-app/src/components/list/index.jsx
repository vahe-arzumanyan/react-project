import React from "react";
import './style.scss';

class List extends React.Component {
    state = {
        showModal: false

    }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    render() {


        return <div className={'P-border G-flex G-center'}>
            <p className={'G-flex G-center'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi
                adipiscing lectus egestas mollis.
                Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat
                consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius
                velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi
                justo id felis.</p>
        </div>
    }
}

export default List;