import React from 'react';
import './Image.css';

class Image extends React.Component{

    render() {
        return(
                <div className = "main">
                  <div className = "image">
                    <img src="https://www.rd.com/wp-content/uploads/2020/06/GettyImages-185330333-edit.jpg?resize=1024,683" width="50%"/>
                    
                    <div className="paracta">
                      <p className="para">Dogs whose parents were the same breed will also be that breed: these dogs are called purebred or pure pedigree dogs. Dogs with parents from different breeds no longer belong to one breed: they are called mutts, mixed-breed dogs, hybrids, or mongrels. Some of the most popular breeds are sheepdogs, collies, poodles and retrievers. It is becoming popular to breed together two different breeds of dogs and call the new dog's breed a name that is a mixture of the parents' breeds' two names. A puppy with a poodle and a pomeranian as parents might be called a Pomapoo. These kinds of dogs, instead of being called mutts, are known as designer dog breeds. These dogs are normally used for prize shows and designer shows. They can be guide dogs.</p>
                      <button className="btn" onClick="myFunction()">More Information</button>
                    </div>
                  </div>
                    <div className ="Paragraph">
                      
                    </div>

                </div>
        )
    }
}

export default Image;