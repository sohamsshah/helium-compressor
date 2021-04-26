import React from 'react'
import InputArea from "./../../molecules/InputArea/InputArea"
import Heading from "./../../atoms/Heading/Heading"
import {useState} from 'react'
import axios from 'axios'
import "./MainSection.css"
import Button from '../../atoms/Button/Button'
import {testCases} from "./../../../testCases/testCases"


function MainSection() {

    const [compressInput, setCompressInput] = useState("")
    const [decompressInput, setDecompressInput] = useState("")

    function handleTestCase(string, operation="compress"){
        if(operation === "compress"){
            setCompressInput(string);
        }
        else if (operation === "decompress"){
            setDecompressInput(string);
        }
    }

    function handleCompressChange(e) {
        setCompressInput(e);
    }

    function handleDecompressChange(e) {
        setDecompressInput(e);
    }

    async function handleCompress() {
          const { data } = await axios.post(
            `/api/compress`,
            {
              inputString: compressInput,
              type:"helium"
            }
          );
          setDecompressInput(data.compressed);
    }

    async function handleDecompress() {
        const { data } = await axios.post(
        `api/decompress`,
        {
            inputString: decompressInput,
            type:"helium"
        }
        );
        setCompressInput(data.decompressed);
    }
    return (
        <div className="main-section">
            <Heading />
            <div className="heading__lead">Compress your strings!</div>
        <div className="inputsection">
          <InputArea onInputChange= {handleCompressChange} onButtonClick={handleCompress} textareaContent={compressInput} buttonText="compress" ></InputArea> 
          <InputArea onInputChange= {handleDecompressChange} onButtonClick={handleDecompress} textareaContent={decompressInput} buttonText="decompress"></InputArea>  
          </div>
        <div className="testcases">
            <div className="testcases__heading">
                Some useful Test case examples
            </div>
            <div className="testcases__compression">
                <div className="testcases__subheading">Compression Test Cases</div>
                <div className="testcases__group">
                    {testCases.compression.map((item, ind) => <Button variant="primary" onButtonClick={() => handleTestCase(item, "compress")}text={`Test case ${ind}`}></Button>)}
                </div>
            </div>

            <div className="testcases__decompression">
            <div className="testcases__subheading">Decompression Test Cases</div>
                <div className="testcases__group">
                    {testCases.decompression.map((item, ind) => <Button variant="primary" onButtonClick={() => handleTestCase(item, "decompress")}text={`Test case ${ind}`}></Button>)}
                </div>
            </div>
        </div>
        </div>
    )
}

export default MainSection
