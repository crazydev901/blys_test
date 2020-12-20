import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';



const VerificationCode = () => {
    const [sixDigitCode, setSixDigitCode] = useState({});
    const [autoFocusIndex, setAutoFocusIndex] = useState(0);
    const [showError, setShowError] = useState("")
    const [disableButton, setDisableButton] = useState(false)
    let history = useHistory()

    useEffect(() => {
        Array.from({ length: 6 }, (v, k) => k).map(v =>
            setSixDigitCode((sixDigitCode) => ({ ...sixDigitCode, [v]: '' }))
        )
    }, [])

    const handleChangeEvent = event => {
        const { name, value } = event.target;
        const prevValue = sixDigitCode?.[name];
        const temp = value.split("");
        setSixDigitCode(
            {
                ...sixDigitCode,
                [name]: prevValue === temp[0] ? temp[1] : temp[0]
            }
        );
        setAutoFocusIndex((Number(name) + 1));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const verificationCode = Object.values(sixDigitCode).join("")
            setShowError("")
            if (verificationCode.length === 6) {
                setDisableButton(true)
                fetch(process.env.REACT_APP_URL + `verificationCode/${verificationCode}`,
                    {
                        method: 'get',
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                    })
                    .then(response => response.json())
                    .then(data => {
                        setDisableButton(false)
                        if (data.status === 200) {
                            return history.push("/success")
                        }
                        setShowError(data.message)
                    }
                    )
                    .catch(err => console.error('err', err));
            }
            else {
                setShowError("Please enter 6 digits code")
            }
        } catch (error) {
            console.trace(error)
        }
    }

    const handlePasteInput = (e) => {
        let clipboardData = '';
        let pastedData = '';
        e.stopPropagation();
        e.preventDefault();
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text');
        pastedData.split("").splice(0, 6 - autoFocusIndex).map((v, index) =>
            setSixDigitCode((sixDigitCode) => (
                {
                    ...sixDigitCode,
                    [autoFocusIndex + index]: v
                }
            ))
        )
    }

    return (
        <div className="verification_code">
            <div className="verification_box">
                <h2>
                    Verification Code:
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="verification_input">
                        {
                            sixDigitCode &&
                            Object.entries(sixDigitCode).map(([key, value], index) => {
                                return (
                                    <input type="number"
                                        ref={input => autoFocusIndex === index ? input && input.focus() : ""}
                                        key={index}
                                        className="foo-bar"
                                        value={value}
                                        name={index}
                                        onClick={() => setAutoFocusIndex(index)}
                                        onChange={handleChangeEvent}
                                        onPaste={handlePasteInput}
                                    />
                                )
                            })
                        }
                    </div>
                    <button type="submit" disabled={disableButton}>Submit</button>
                    <div className="error">
                        <span>{showError}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerificationCode