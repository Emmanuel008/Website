import React from 'react';
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ReactMarkdownProps } from 'react-markdown';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

type MarkdownPreviewProps = {
  className: 'preview'
} & ReactMarkdownProps

const defaultMarkdown = `
# Heading level 1
## Heading level 2
> blockquote
**bold text**
1. First item
2. Second item
3. Third item

\`code\`

\`\`\`
<html>
  <head>
  codeblocks
  </head>
</html>
\`\`\`

[My Github](https://github.com/notdaan)

![notdaan](image.jpg)
`

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown: "",
      defaultMarkdown: defaultMarkdown,
      editorToggle: false,
      firstload: true
    };
  }

  componentDidMount() {
    console.log("did mount")
    this.updateMarkdown(defaultMarkdown)
  }

  updateMarkdown(data) {
    console.log("update markdown")
    this.setState({
      markdown: data,
    });
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


//a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
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
                id='editor' 
                className='input' 
                value={(this.state.firstload ? this.state.defaultMarkdown : this.state.markdown)}
                onChange={(element) => {
                  this.updateMarkdown(element.target.value)
                  //console.log("change")
                }}
                ></textarea>
              </div>
            </div>
            <div className='line-break'></div>
            <div className='preview-container'>
                <h1 className='body-heading'>Preview</h1>
                <div id='preview' className='text-area' data-color-mode="light">
                  <MarkdownPreview source={this.state.markdown} />
                </div>
            </div>
          </div>
          </body>
      );
    }
}