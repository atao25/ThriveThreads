import React from 'react'
import './components/Body.css'
import { useState } from 'react';
import { promptChat } from './components/cohere';
import { Link } from 'react-router-dom';


const Thread = () => {
    const callChat = (prompt) => {
        return promptChat(prompt);
    } 

    const [postOne, setPostOne] = useState("绝对同意！在混乱中挤出时间进行自我保健可以改变游戏规则。学会说“不”可以腾出时间进行有意义的自我投资。质量胜于数量改变了我的日常生活。优先考虑正念休息是我保持理智的支柱。这是关于在日常忙碌中明智的选择和有意识的、现实的自我护理。");
    const [postTwo, setPostTwo] = useState("제가 깨달은 것 중 하나는 자기 관리를 일상 업무에 통합하는 것이었습니다. 산책이나 식사와 같은 일상적인 활동을 마음챙김의 순간으로 바꾸는 것은 큰 변화를 가져왔습니다. 이는 자기 관리를 일상 생활에 원활하게 접목시키는 것입니다. 알림 끄기와 같은 작은 조정으로 정신적 웰빙을 위한 공간을 확보할 수 있습니다. '나만의 시간'을 우선시하는 것은 변화를 가져옵니다.");
    const [postThree, setPostThree] = useState("Genau richtig! Die Kraft der Dankbarkeit zu nutzen, wurde zu meinem Anker für die Selbstfürsorge. Das tägliche Nachdenken über positive Aspekte brachte eine tiefgreifende Veränderung. Es geht darum, nicht nur den Körper, sondern auch den Geist zu fördern. Das Aufzeichnen von Dankbarkeitsnotizen verwandelte die Routine in eine Achtsamkeitsübung. Die Anerkennung kleiner Erfolge verstärkte die Wirkung und machte Selbstfürsorge zu einer ganzheitlichen Praxis in meinem geschäftigen Leben.");

    const translate = async (post, num) => {
        const newPost = await callChat("Translate this to English: " + post);
        if (num == 1) {
            setPostOne(newPost);
        } else if (num == 2) {
            setPostTwo(newPost);
        } else if (num == 3) {
            setPostThree(newPost);
        }  
    };
    
    return (
        <div className = "body-container">
            <div className = "side-panel">
        
                <div className = "section">
                <p className = "side1"><Link className="side1" to="/thread">Prioritizing Self-Care</Link></p>
                <hr/>
                </div>

                <div className = "section">
                <p className = "side1">Quick & Healthy Recipes</p>
                <hr/>
                </div>

                <div className = "section">
                <p className = "side1">Mental Health Support</p>
                <hr/>
                </div>
    
            </div>

            <div className = "main">
                <h2>How do I prioritize self-care with a busy schedule?</h2>
                <p>Prioritizing self-care amidst a busy schedule involves intentional choices. Allocate dedicated time for self-care activities, whether it's exercise, meditation, or leisure. Set realistic boundaries by learning to say 'no' and delegating tasks. Break down goals into manageable steps, emphasizing quality over quantity. Incorporate micro-breaks throughout the day for brief moments of rejuvenation. Efficient time management and effective prioritization enable the integration of self-care into daily routines, fostering a balanced and sustainable approach to well-being within the constraints of a hectic schedule.</p>
                <div>
                    <ol><h4>User_138490</h4>{postOne}</ol>
                    <button className='translate' onClick={() => translate(postOne, 1)}>translate</button>
                    <ol><h4>ubc_student</h4>{postTwo}</ol>
                    <button className='translate' onClick={() => translate(postTwo, 2)}>translate</button>
                    <ol><h4>marvin123</h4>{postThree}</ol>
                    <button className='translate' onClick={() => translate(postThree, 3)}>translate</button>
                </div>
            </div>
            
            

        </div>
    
    )
}

export default Thread