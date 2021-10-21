import React, { useState } from "react";

function ActivityValues({ task, allowDrop, drag, drop}) { 

    const [emotion, setEmotion] = useState(task.emotion);
    const [response1, setResponse1] = useState(task.response1);
    const [response2, setResponse2] = useState(task.response2);
    const [response3, setResponse3] = useState(task.response3);
    const [respCorrect, setRespCorrect] = useState(task.respCorrect);
    const [image, setImage] = useState(task.image);

    return(
        <div>
            <div class='row' style={{marginTop: '2%', justifyContent: 'center'}}>
                <img display="center"
                    onDragOver={(e)=> allowDrop(e)} 
                    onDrop={(e)=> drop(e)} align="center"  
                    src={image} />
            </div>
            <div class='row' style={{marginTop: '5%', justifyContent: 'center'}}>
                <div style={{marginRight: '4%'}}>
                    <label id="emotion1" name="emotion1" 
                        value={response1}
                        draggable={true} 
                        onDragStart={(e)=> drag(e)}
                        onDragEnd={()=> {
                            if(response1 != respCorrect) {
                                window.alert('Ops, tente outra vez.') 
                            }else {
                                window.alert('PARABENS!!!')
                            }
                        }}>{response1}
                    </label>
                </div>  

                <div style={{marginRight: '4%'}}>
                    <label id="emotion2" name="emotion2" 
                        value={response2} 
                        draggable={true} 
                        onDragStart={(e)=> drag(e)}
                        onDragEnd={()=> {
                            if(response2 != respCorrect) {
                                window.alert('Ops, tente outra vez.') 
                            }else {
                                window.alert('PARABENS!!!')
                            }
                        }}>{response2}
                    </label>
                </div>

                <div>
                    <label id="emotion3" name="emotion3" 
                        value={response3}
                        draggable={true} 
                        onDragStart={(e)=> drag(e)} 
                        onDragEnd={()=> {
                            if(response3 != respCorrect) {
                                window.alert('Ops, tente outra vez.') 
                            }else {
                                window.alert('PARABENS!!!')
                            }
                        }}>{response3}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ActivityValues;