import React from 'react';
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ReactMarkdownProps } from 'react-markdown';

type MarkdownPreviewProps = {
  className: 'preview'
} & ReactMarkdownProps

let source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;
export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown: "hi my name is daniel",
    };
  }
  updateMarkdown(markdown) {
    this.setState({markdown});
  };
  
    render(){
      return (
        <body>
          <div className='body-container'>
            <div className='editor-container '>
              <h1 className='body-heading'>Editor</h1>
              <div className='text-area'>
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
                <div className='text-area 'data-color-mode="light">
                  <MarkdownPreview source={this.state.markdown} />
                </div>
            </div>
          </div>
          </body>
      );
    }
}