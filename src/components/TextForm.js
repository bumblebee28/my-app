import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState();

    const removedisplay = ()=>{
        let content = document.getElementById('preview');
        let s = document.getElementById('summary')
        let a = ' ';
        content.innerHTML = a;
        s.innerHTML = a;
    }

    const upperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        let content = document.getElementById('preview');
        let a = '<h3>Text Preview: </h3>' + `${newtext}`;
        content.innerHTML = a;
        props.showAlert("Text has been converted to UPERCASE.", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        removedisplay();
    }

    const lowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        let content = document.getElementById('preview');
        let a = '<h3>Text Preview: </h3>' + `${newtext}`;
        content.innerHTML = a;
        props.showAlert("Text has been converted to lowercase.", "success")
    }

    const capitalize = () => {
        let newtext = text.toLowerCase();
        let arr = newtext.split(" ")
        let i = 0
        let final;
        while(arr[i] != null){
            let a = arr[i]
            arr[i] = a.charAt(0).toUpperCase() + a.slice(1);
            i++
            final = arr.join(" ");
        }
        setText(final);
        let content = document.getElementById('preview');
        let a = '<h3>Text Preview: </h3>' + `${final}`;
        content.innerHTML = a;
        props.showAlert("Text has been Capitalized.", "success")
    }

    const boldText = () => {
        let newtext = '<b>' + `${text}` + '</b>'
        let content = document.getElementById('preview');
        let a = '<h3>Text Preview: </h3>' + `${newtext}`;
        content.innerHTML = a;
        props.showAlert(`Text has been converted to BOLD.`, "success")
    }

    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied.", "success")
    }

    const clearText = () => {
        setText('');
        props.showAlert("Textbox has been cleared.", "success")
        removedisplay();
    }

    const analyse = () => {
        let s = document.getElementById('summary')
        let a = '<h3>Text Analysis: </h3>' + `${text.split(" ").length}` + ' words and ' + `${text.length} ` + ' characters.';
        s.innerHTML = a;
    }

    const showpreview = () => {
        if (text === '') {
            let content = document.getElementById('preview');
            let a = '<h3>Text Preview: </h3> Nothing to preview!!';
            content.innerHTML = a;
        }
        else {
            let content = document.getElementById('preview');
            let a = '<h3>Text Preview: </h3>' + `${text}`;
            content.innerHTML = a;
        }
    }
    return (
        <>
            <div className="my-3">
                <div className="mb-3">
                    <br />
                    <h1 >{props.label} : </h1>
                    <br />
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#495057' : '#dee2e6', color: props.mode === 'dark' ? '#dee2e6' : 'black', fontFamily: 'sans-serif'}} ></textarea>
                </div>
                <div className="d-grid gap-2 d-md-block mt-5">
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={upperCase}>Convert to Upper-case</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={lowercase}>Convert to Lower-case</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={capitalize}>Capitalize first character of each word</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={boldText}>Bold</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={copyText}>Copy</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={clearText}>Clear</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={analyse}>Get Text Analysis</button>
                    <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick={showpreview}>Get Preview</button>
                </div>

            </div>
            <div className="container my-5 display">
                <p id='summary'></p>
                <p id='preview'></p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    label: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    label: "Enter text to analyze"
}