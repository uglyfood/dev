import React from "react";
import Character1 from "./Character1";

function Intro() {
    return (
        <>
            <div className="storyLayout">
                <div>
                    <p>
                        <h1><strong>우리가 버려졌다고? 그럴리가.</strong></h1><br />
                        어느 바쁜 레스토랑의 구석, <br />
                        어느 한 요리사는 멋진 요리를 만듭니다. <br /><br />

                        최고의 요리를 만들기 위해 신선하고 이쁜 식재료들만 골라서 조리하고, <br />
                        나머지 못생기고 상처난 식재료들은 쓰레기통으로 버렸습니다.<br /><br />

                        그건 못생기고 상처난 식재료들에게 갑자기 찾아온 자유였습니다. <br /><br />

                        이쁜 식재료만으로 만들어질 수 있다고 생각했던 요리가<br />
                        못생기고 상처난 식재료들에 의해 그보다 더 멋지게 탄생합니다. <br /><br />
                        그리고 그들은 이렇게 말했습니다.<br /><br />
                        왜 나를 쓸모없다고 얘기해?<br />
                        나의 가치는 내가 생각하는대로 내가 정하는거야.<br /><br />
                        <h3><strong>선택은 내가해!</strong></h3>
                    </p>
                </div>
                <Character1 />
            </div>
        </>
    )
};

export default Intro;