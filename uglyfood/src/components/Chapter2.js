import React from "react";
import Character1 from './Character1'

function Chapter2() {
    return (
        <>
            <p>
                <h1><strong>나는 버려진거야!!</strong></h1><br />
                못생기고 상처난 식재료들은 자유를 얻었다고 믿었습니다.<br />
                하지만 쓰레기통에 갇힌 시간이 흐를수록, 식재료들은 악취가 나기 시작하였고,<br />
                서로간의 관계도 균열이 일어나기 시작했습니다. <br />
                어떤 식재료들은 자유를 얻은거라고 믿은 반면, <br />
                어떤 식재료는 나는 버림받은거라고 믿기 시작했기 때문입니다. <br />
                왜 나는 버려진걸까?<br />
                우리는 버려진게 아니야<br /><br />
                이 갈등의 방향은 누구에게 향하는 걸까?
                <Character1 />
            </p>
        </>
    )
};

export default Chapter2;