import { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className="p-2 m-2 border-black">
      <h1>{title}</h1>
      {isVisible ? (
        <button onClick={() => setisVisible(false)}> Hide</button>
      ) : (
        <button onClick={() => setisVisible(true)}>Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

function Instamart() {
  const [visibleSection, setisVisibleSection] = useState("about");

  return (
    <div>
      <Section
        title={"About"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the"
        }
        isVisible={visibleSection === "about"}
        setisVisible={(isVisible) =>
          setisVisibleSection(isVisible ? "about" : "")
        }
      />
      <hr></hr>
      <Section
        title={"Title"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the"
        }
        isVisible={visibleSection === "Title"}
        setisVisible={(isVisible) =>
          setisVisibleSection(isVisible ? "Title" : "")
        }
      />
      <hr></hr>
      <Section
        title={"Contact"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical literature, discovered by Richard McClintock. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the"
        }
        isVisible={visibleSection === "contact"}
        setisVisible={(isVisible) =>
          setisVisibleSection(isVisible ? "contact" : "")
        }
      />
      <hr></hr>
    </div>
  );
}

export default Instamart;
