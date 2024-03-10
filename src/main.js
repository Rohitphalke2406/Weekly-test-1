import './main.css';
import React, { useState } from 'react';

function Main(){

    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(7); // Default password length
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);


    const generatePassword = () =>{
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()-_+=<>?';

        let charset = '';

        if (includeUppercase) charset += uppercaseChars;
        if (includeLowercase) charset += lowercaseChars;
        if (includeNumbers) charset += numberChars;
        if (includeSymbols) charset += symbolChars;

        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
    };
    

    return(
        <div className="container">
            <h1>Password Generator</h1>
            <div className="input-container">
                <input type="text" name="" id="password-result" value={password} readOnly/>
                <button className="copy-btn" onClick={copyToClipboard}>
                    <img src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png" alt="" />
                </button>
            </div>
            <div className="form-2">
                <label>Select Password Length <strong>**8-50 characters**</strong></label>
                <input type="number" name="" id="" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} min={7} max={50}/>
            </div>
            <div className="form-3">
                <input type="checkbox" name="" id="" checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}/>
                <label >Include Uppercase</label>
                <br />
                <input type="checkbox" name="" id="" checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}/>
                <label >Include Lowercase</label>
                <br />
                <input type="checkbox" name="" id="" checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}/>
                <label >Include Numbers</label>
                <br />
                <input type="checkbox" name="" id="" checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}/>
                <label >Include Symbols</label>
                <br />

                <button onClick={generatePassword}>Generate Password</button>
            </div>
        </div>
    );
}

export default Main;