import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';


class App extends React.Component {
    state = {
        bgColor: '',
        title: '',
        description: '',
        titleColor: '',
        descriptionColor: '',
        borderR: '',
        titleFontSize: 16,
        descriptionFontSize: 18,
        uploadFile: '',
        titleBgColor: '',
        descriptionBgColor: '',
        borderRadius: 0,
        chooseFile:''
    }
    // this is title content
    handelBodyBg = (e) => {
        this.setState({bgColor: e.target.value})
    }

    handleChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }
    handleTitleFontSize = (e) => {
        this.setState({titleFontSize: e.target.value})
    }
    handleTitleColor = (e) => {
        this.setState({titleColor: e.target.value})
    }

    handleTitleBgeColor = (e) => {
        this.setState({titleBgColor: e.target.value})
    }
    //this is description content

    handleChangeDescription = (e) => {
        this.setState({description: e.target.value})
    }
    handleChangeDescriptionFontSize = (e) => {
        this.setState({descriptionFontSize: e.target.value})
    }
    handleChangeDescriptionColor = (e) => {
        this.setState({descriptionColor: e.target.value})
    }
    handleDescriptionBgColor = (e) => {
        this.setState({descriptionBgColor: e.target.value})
    }

    // border radius
    handleBorderRadius = (e) => {
        this.setState({borderRadius: e.target.value})
    }

    // choose file

    handelFile =(e)=>{
        this.setState({chooseFile:e.targe.value})
    }

    render() {
        //  ============================= body backgroundColor  =============================

        return <div className={'P-bodyBgColor'} style={{backgroundColor: this.state.bgColor}}>
            <div className={'G-container'}>
                <div className={'G-flex'}>
                    <label className={'G-flex G-center'}>
                    <p>body background color</p>
                    <input type='color' onChange={this.handelBodyBg}
                           className={'P-input-body-bgColor'} style={{visiblity:'hidden'}}/>
                </label>
                    <lebel>
                        <p>{this.state.chooseFile}Choose File</p>
                        <input type='file' onChange={this.handelFile}/>
                    </lebel>
                </div>



                {/* ============================= print content ============================= */}

                {/* ----------- Title ----------- */}

                <div className={'G-flex P-event-content'}>
                    <div className={'G-flex G-flex-column'}>
                        <div className={'P-label'}>
                            <label>Title
                                <input type="text" className={'P-input-title'} value={this.state.title}
                                       onChange={this.handleChangeTitle}/>
                            </label>
                            <label> Font Size
                                <input type='range' value={this.state.titleFontSize} max={50} min={16}
                                       onChange={this.handleTitleFontSize}/>
                            </label>
                            <label> Color
                                onChange={this.handleTitleColor}/>
                            </label>
                            <label> Background Color
                                <input type='color' value={this.state.titleBgColor}
                                       onChange={this.handleTitleBgeColor}/>
                            </label>
                        </div>

                        {/* ----------- Description ----------- */}

                        <div className={'P-label'}>
                            <label> Description
                                <input type="text" value={this.state.description} max={50} min={10}
                                       className={"P-input-description"}
                                       onChange={this.handleChangeDescription}/>
                            </label>
                            <label>Font Size
                                <input type='range' value={this.state.descriptionFontSize} max={50} min={16}
                                       onChange={this.handleChangeDescriptionFontSize}/>
                            </label>
                            <label> Color
                                <input type='color' value={this.state.descriptionColor}
                                       onChange={this.handleChangeDescriptionColor}/>
                            </label>
                            <label> Background Color
                                <input type='color' value={this.state.titleBgColor}
                                       onChange={this.handleDescriptionBgColor}/>
                            </label>

                        </div>
                    </div>

                    {/* ============================= result content ============================= */}

                    <div className={'P-result'} style={{borderRadius: this.state.borderRadius + "px"}}>
                        <div className={'G-flex G-flex-column'}>
                            <div className={'P-result-title'}>
                                <h3>Title</h3>
                                <p className={'hh'} style={{
                                    fontSize: this.state.titleFontSize + 'px',
                                    color: this.state.titleColor,
                                    backgroundColor: this.state.titleBgColor
                                }}>{this.state.title}</p>
                            </div>
                            <div className={'P-result-description'}>
                                <h3>Description</h3>
                                <p className={'hh'} style={{
                                    fontSize: this.state.descriptionFontSize + 'px',
                                    color: this.state.descriptionColor,
                                    backgroundColor: this.state.descriptionBgColor
                                }}>{this.state.description}</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div>
                    <label>Event Radius
                        <input type='range' value={this.state.borderRadius} max={50} min={5}
                               onChange={this.handleBorderRadius}/>
                    </label>
                </div>
            </div>
        </div>

    }
}

export default App;
