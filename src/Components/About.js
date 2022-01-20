import React from 'react'

export default function About(props) {
    
    return (
        <div className="container" style = {{border: props.mode === 'dark'? "1px solid white" : "1px solid black" , color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }}>
            <h1 className="my-3" style = {{  color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }}>About Us</h1>
            <div className="accordion" id="accordionExample my-3"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }}>
                <div className="accordion-item"  style = {{  border : props.mode === 'dark'? "1px solid white" : "1px solid black", color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or anything else.
                    </div>
                    </div>
                </div>
                <div className="accordion-item"  style = {{ border: props.mode === 'dark'? "1px solid white" : "1px solid black" ,color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. 
                        TextUtils reports thr number of words and character. Thus it is suitable for writing text with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ border: props.mode === 'dark'? "1px solid white" : "1px solid black" , }}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  style = {{ color: props.mode === 'dark'? 'white' : '#595e5b', backgroundColor: props.mode === 'dark'? '#595e5b' : 'white' }} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This word counter software works in any web browsers such as chrome, firefox, Internet explorer, safari, Opera. 
                        It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.
                    </div> 
                    </div>
                </div>
             </div>
        </div>
    )
}
