import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb} from "@fortawesome/free-solid-svg-icons";
import SplitButton from "./SplitButton"; // 임포트 추가


const getRandomUniqueIndices = (count, max) => {
    const indices = new Set();
    while (indices.size < count) {
        const randomNumber = Math.floor(Math.random() * max);
        indices.add(randomNumber);
    }
    return [...indices];
};

const Index = () => {
    const [randomBooms, setRandomBooms] = useState([]);
    const [difficulty, setDifficulty] = useState("초급");

    const handleDifficultyChange = (selectedDifficulty) => {
        setDifficulty(selectedDifficulty);
    };

    const mineCounts = {
        초급: 10,
        중급: 18,
        고급: 99,
    };

    useEffect(() => {
        setRandomBooms(getRandomUniqueIndices(mineCounts[difficulty], 81));
    }, [difficulty]);

    const renderBoxes = () => {
        return [...Array(9)].map((_, row) => {
            return (
                <div key={row}>
                    {[...Array(9)].map((_, col) => {
                        const index = row * 9 + col;
                        const isBoom = randomBooms.includes(index);
                        return isBoom ? (
                            <div
                                key={index}
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "1px solid #000",
                                }}
                            >
                                <FontAwesomeIcon icon={faBomb} />
                            </div>
                        ) : (
                            <div
                                key={index}
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "1px solid #000",
                                }}
                            ></div>
                        );
                    })}
                </div>
            );
        });
    };

    return (
        <>
            <SplitButton onChangeDifficulty={handleDifficultyChange} />
            {renderBoxes()}
        </>
    );
};
export default Index;