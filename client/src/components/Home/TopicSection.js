import React from 'react'
import Headings from '../UI/Headings'
import Item from './Item'

const Topics=[
    {
        Key:1,
        Topic:"Array",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:2,
        Topic:"String",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:3,
        Topic:"Stack",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:4,
        Topic:"Queue",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:5,
        Topic:"Graph",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:7,
        Topic:"Binary Tree",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:8,
        Topic:"Binary Search Tree",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:9,
        Topic:"Graph",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:10,
        Topic:"Recursion",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:11,
        Topic:"Dynamic Programming",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:12,
        Topic:"Backtracking",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:13,
        Topic:"Heap",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:14,
        Topic:"Trie",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:15,
        Topic:"Number Theory",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:16,
        Topic:"Searching",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
    {
        Key:17,
        Topic:"Sorting",
        Questions:32,
        Tutorial_Videos:42,
        Difficulties:"All"
    },
]

function TopicSection() {
    return (
<div className='topic-body'>
            <div className='topic-body-container'>
                <Headings>Topics Covered</Headings>
                <div className="topic-body-content" style={{"height":"900px"}}>
                    {Topics.map((Topic)=>{
                        return <Item item={Topic}/>
                    })}
                </div>
            </div>
        </div>
    
    )
}

export default TopicSection
