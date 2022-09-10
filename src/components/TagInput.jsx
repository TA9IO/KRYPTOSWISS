import React from "react";
import NftInput from "./NftInput";
import Btn from "./Btn";
import {AiOutlineCloseCircle} from 'react-icons/ai'


const TagInput = ({ tags, updateTags }) => {
  const [tagData, setTagData] = React.useState(tags);
  const removeTagData = (indexToRemove) => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
  };
  const addTagData = (event) => {
    if (event.target.value !== "") {
      // filter duplicates ** this is an O(n^2) but it is not a big deal ** we will not have a lot of elements ** TBH i dont like this intire component code  think it could be better but it works fine :) (small component)
      setTagData([...tagData, event.target.value].filter((e,i,a)=> i === a.indexOf(e)));
      event.target.value = "";
    }
  };
  const tagsRef = React.useRef(null)
  // so this component needs to rerenders b4 the father to change the state try to play with it and see the problemes it fixes
  React.useEffect(() => {
    updateTags(tagData);
  }, [tagData]);
  
  
  
  return (
    <div className="tag-input">
      <div className="input-container">
      <NftInput
        ref={tagsRef}
        title={"Tags"}
        placeholder={"Press Enter To Add a Tag"}
        inputType="text"
        handleKeyUp={(event) => {
          if (event.key === "Enter") {
            addTagData(event);
          }
        }}
        
      />
      
      </div>
      <div className="main-tags-container">
      <div className="tags-container">
        {tags.map((tag, i) => {
          return <div key={tag} className="tag">
          {tag}
          <AiOutlineCloseCircle onClick={() => removeTagData(i)} size={20} color='grey'/>
          </div>;
        })}
      </div>
    </div>

    </div>
  );
};

export default TagInput;
