import "./Topic.css";
import Headings from "../UI/Headings";
import SingleTopic from "./SingleTopic";

const Topics=[
    {
        Key:1,
        Topic:"Array",

    },
    {
        Key:2,
        Topic:"String",
  
    },
    {
        Key:3,
        Topic:"Stack",

    },
    {
        Key:4,
        Topic:"Queue",

    },
    {
        Key:5,
        Topic:"Graph",

    },
    {
        Key:7,
        Topic:"Binary Tree",

    },
    {
        Key:8,
        Topic:"Binary Search Tree",

    },
    {
        Key:9,
        Topic:"Graph",

    },
    {
        Key:10,
        Topic:"Recursion",

    },
    {
        Key:11,
        Topic:"Dynamic Programming",

    },
    {
        Key:12,
        Topic:"Backtracking",

    },
    {
        Key:13,
        Topic:"Heap",

    },
    {
        Key:14,
        Topic:"Trie",

    },
    {
        Key:15,
        Topic:"Number Theory",

    },
    {
        Key:16,
        Topic:"Searching",

    },
    {
        Key:17,
        Topic:"Sorting",

    },
]

const Topic = () => {
  return (
    <>
    <div className="topics-headings-body"><div className="topics-headings"> <Headings>Topics</Headings></div></div>
     
      <div className="topics-body">
        <div className="topics-body-container">
          <div className="topics-body-content" style={{ "height": "180px" }}>
            {Topics.map((Topic)=>{
                return <SingleTopic>{Topic.Topic}</SingleTopic>
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Topic;
