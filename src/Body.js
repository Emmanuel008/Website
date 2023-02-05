import React from 'react';
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ReactMarkdownProps } from 'react-markdown';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

type MarkdownPreviewProps = {
  className: 'preview'
} & ReactMarkdownProps

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown: "",
      editorToggle: false,
    };
  }
  updateMarkdown(markdown) {
    this.setState({markdown});
  };
  
  ToggleEditor(editorToggle) {
    this.setState({
      editorToggle: !this.state.editorToggle
    })
  }

  refreshMarkdown(markdown) {
    this.setState({
      markdown: "",
    })
  }

    render(){
      return (
        <body>
          <div className='body-container'>
            <div className='editor-container '>
              <div className='editor-header'>
              <MDBBtn id='toggle-size-btn' tag='a' color='none' className='m-1' style={{ color: '#47225c' }} onClick={this.refreshMarkdown.bind(this)}>
                <MDBIcon fas icon="sync" size='2x'/>
              </MDBBtn>
              <h1 className='body-heading'>Editor</h1>
              <MDBBtn id='toggle-size-btn' tag='a' color='none' className='m-1' style={{ color: '#47225c' }} onClick={this.ToggleEditor.bind(this)}>
                <MDBIcon fas icon={this.state.editorToggle ? "expand" : "compress"} size='2x'/>
              </MDBBtn>
              </div>
              <div className={'text-area-' + (this.state.editorToggle ? 'close' : 'open')}>
                <textarea 
                id='input' 
                className='input' 
                value={this.state.markdown} 
                onChange={(element) => {
                  this.updateMarkdown(element.target.value)
                }}
                ></textarea>
              </div>
            </div>
            <div className='line-break'></div>
            <div className='preview-container'>
                <h1 className='body-heading'>Preview</h1>
                <div className='text-area' data-color-mode="light">
                  <MarkdownPreview source={this.state.markdown} />
                </div>
            </div>
          </div>
          </body>
      );
    }
}