import React, {useState} from 'react'
import Select from 'react-select'



function Multipleddl()
{
    var Attnames=[
        {"value":1,"label":"5o'ClockShadow"},
        {"value":2,"label":"ArchedEyebrows"},
        {"value":3,"label":"Attractive"},
        {"value":4,"label":"BagsUnderEyes"},
        {"value":5,"label":"Bald"},
        {"value":6,"label":"Bangs"},
        {"value":7,"label":"BigLips"},
        {"value":8,"label":"BigNose"},
        {"value":9,"label":"BlackHair"},
        {"value":10,"label":"BlondHair"},
        {"value":11,"label":"Blurry"},
        {"value":12,"label":"BrownHair"},
        {"value":13,"label":"BushyEyebrows"},
        {"value":14,"label":"Chubby"},
        {"value":15,"label":"DoubleChin"},
        {"value":16,"label":"Eyeglasses"},
        {"value":17,"label":"Goatee"},
        {"value":18,"label":"GrayHair"},
        {"value":19,"label":"HeavyMakeup"},
        {"value":20,"label":"HighCheekbones"},
        {"value":21,"label":"Male"},
        {"value":22,"label":"MouthSlightlyOpen"},
        {"value":23,"label":"Mustache"},
        {"value":24,"label":"NarrowEyes"},
        {"value":25,"label":"NoBeard"},
        {"value":26,"label":"OvalFace"},
        {"value":27,"label":"PaleSkin"},
        {"value":28,"label":"PointyNoise"},
        {"value":29,"label":"ReceedingHairline"},
        {"value":30,"label":"RosyCheeks"},
        {"value":31,"label":"Sideburns"},
        {"value":32,"label":"Smiling"},
        {"value":33,"label":"StraightHair"},
        {"value":34,"label":"WavyHair"},
        {"value":35,"label":"WearingEarrings"},
        {"value":36,"label":"WearingHat"},
        {"value":37,"label":"WearingLipstick"},
        {"value":38,"label":"WearingNecklace"},
        {"value":39,"label":"WearingNecktie"},
        {"value":40,"label":"Young"}
    ];

    var [Displayvalue, getvalue] = useState();

    var Ddlhandle = (e)=>
    {
        getvalue(Array.isArray(e)?e.map(x=>x.label):[]);
    }
    return(
        <div style={{
            backgroundColor: 'blue',
            
          }}>
            <Select isMulti options= {Attnames} onChange={Ddlhandle}></Select>
            <centre><b>The Selected Attributes: </b> <h3 style = {{color:'red'}}> {Displayvalue + "\n"}</h3></centre>
        </div>
    );

}

export default Multipleddl;