import react, {useState} from 'react'
import DropDown from './DropDown'
import Convert from './Convert';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
      label: 'Afrikaans',
      value: 'af',
    },
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
  ];

const Translate = () =>{
    const [language, setLanguage] = useState(options[0]);
    const [text, setTest] = useState("");
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>setTest(e.target.value)} />
                    <DropDown 
                        selected={language}
                        onSelectedChange={setLanguage}
                        options={options}
                        label={"Select a language"}
                    />
                    <hr />
                    <h3 className="ui header">Output</h3>
                    <Convert text={text} language={language} />
                </div>
            </div>
        </div>
    )
}

export default Translate;