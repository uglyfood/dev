import React from "react";
import Character1 from "./Character1";

function Intro() {
    return (
        <>
        <div className="storyLayout">
            <p>
                <h1><strong>우리가 버려졌다고? 그럴리가.</strong></h1><br />
                어느 바쁜 레스토랑의 구석, <br />
                어느 한 요리사는 멋진 요리를 만듭니다. <br />
                최고의 요리를 만들기 위해 신선하고 이쁜 식재료들만 골라서 조리하고, <br />
                나머지 못생기고 상처난 식재료들은 쓰레기통으로 버렸습니다.<br />
                요리사는 버렸다고 생각했지만, <br />
                못생기고 상처난 식재료들은 버려졌다고 생각하지 않았습니다. <br />
                오히려 자유를 누릴 수 있다고 생각했습니다. <br />
                못생기고 상처난 식재료들이 모여 요리사만 만들수 있다고 생각했던 요리를 <br />
                그보다 더 멋지게 탄생시킵니다. <br />
                그리고 그들은 이렇게 말했습니다.<br />
                왜 나를 쓸모없다고 얘기해? 나의 가치는 내가 생각하는대로 내가 정하는거야.<br />
                선택은 내가해!
            </p>
            <div>
                <Character1></Character1>
            </div>
        </div>
        </>
    )
};

export default Intro;