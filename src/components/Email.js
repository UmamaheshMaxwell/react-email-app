import React, {useRef} from 'react';
import EmailEditor from 'react-email-editor'

const Email = () => {
    const emailEditorRef = useRef(null)

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const {design, html} = data;
            console.log('exportHtml', html)
        })
    }

    const onLoad = () => {


    }

    return (
        <div className="container">
            <div>
                <button onClick={exportHtml} className="btn btn-submit"> Export HTML</button>
            </div>
            <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
        </div>
    );
};

export default Email;
