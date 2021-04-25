import React from 'react'
import InputArea from "./../../molecules/InputArea/InputArea"
import Heading from "./../../atoms/Heading/Heading"
import {useState} from 'react'
import axios from 'axios'
import "./MainSection.css"


function MainSection() {

    const [compressInput, setCompressInput] = useState("")
    const [decompressInput, setDecompressInput] = useState("")

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
        </div>
    )
}

export default MainSection
