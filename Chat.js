import React, { useState, useRef, useMemo, ReactDOM } from 'react';
import { View, Text } from 'react-native';

import { Editor } from '@tinymce/tinymce-react';

import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import "./src/myui/skin.min.css";
// import contentCss from 'tinymce/skins/content/default/content.min.css';
import contentUiCss from './src/myui/content.min.css';


export default function Chat(props) {
  const [text, setText] = useState("");
  const body = useRef(null);
  // note that skin and content_css is disabled to avoid the normal
  // loading process and is instead loaded as a string via content_style
  useMemo(() => {
    if (body.current) {
      // body.current.appendChild(text);
    }
  }, [text])
  return (
    <View>
      <View ref={body} style={{ backgroundColor: "gray", height: 400, width: "100%" }} >
        <div dangerouslySetInnerHTML={{__html: text}} />
        </View>
      <View>
        <Editor
          apiKey='emk0qtjkntolvjbw83e4mlmmtdhff7gzzbizufa14r6lgz05'
          onInit={(evt, editor) => toolbar.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          inline={true}
          onEditorChange={(text, editor) => {
            setText(editor.getContent({format: "html"}))
          }}
          init={{
            fixed_toolbar_container: '#mytoolbar',
            toolbar_persist: true,
            menubar: false,
            toolbar: 'undo redo | bold italic underline | alignleft aligncenter | alignright alignjustify |' +
              ' bullist numlist outdent indent | fontsizeselect',
            content_style: [contentUiCss].join('\n'),
            toolbar_mode: "scrolling",
            draggable_modal: true,
            skin: 'oxide',
            skin_url: 'myui',
          }}
        />
        <View nativeID="toolbar"></View>
      </View>

    </View>
  );
}
