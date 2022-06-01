import React from "react";
import Character2 from "./Character2";


function Chapter2() {
    return (
        <>
            <div className="storyLayout">
                <div>
                    <p>
                        <h2><strong>나는 버려진거야!!</strong></h2><br />
                        못생기고 상처난 식재료들은 자유를 얻었다고 생각했습니다.<br />
                        하지만 쓰레기통에 갇힌 시간이 흐를수록, <br />
                        식재료들의 관계는 점점 악취가 풍기기 시작하는데..<br /><br />
                        어떤 식재료들은 자유를 얻은거라고 믿은 반면, <br />
                        어떤 식재료는 나는 버림받은거라고 믿기 시작하였고<br />
                        갈등은 점점 깊어져 갔습니다. <br /><br />
                        "왜 나는 버려진걸까?"<br />
                        "우리는 버려진게 아니야"<br /><br />
                        <h3><strong>이 갈등의 방향은 누구에게 향하는 걸까?</strong></h3>
                    </p>
                </div>
                <Character2 />
            </div>
        </>
    )
};

export default Chapter2;