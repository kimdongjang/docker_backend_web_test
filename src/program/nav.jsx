import { render } from "@testing-library/react";
import { useState } from "react";


export default function Nav() {
    const [datas, setDatas] = useState(
        {
            '행사정보': [{
                id: 1,
                name: '초대글',
                link: 'greeting.php'
            }, {
                id: 2,
                name: '행사일정',
                link: 'schedule.php'
    
            }, {
                id: 3,
                name: '오시는길',
                link: 'map.php'
    
            }]
        }

    )

    const state2 =
        { "days": [{ "id": 1, "day": 1 }, { "id": 2, "day": 2 }, { "id": 3, "day": 3 }], "words": [{ "id": 1, "day": 1, "eng": "book", "kor": "책", "isDone": false }, { "id": 3, "day": 2, "eng": "car", "kor": "자동차", "isDone": false }, { "id": 12, "day": "3", "eng": "apple", "kor": "사과", "isDone": false, }] }

    const state3 =
    {
        "product": [
            {
                "id": 1,
                "name": "척테일러 올스타 리프트 캔버스",
                "price": "75000",
                "gender": "여성",
                "color_name": "블랙",
                "main_detail": "베스트셀링 플랫폼 스니커즈",
                "sub_detail": "아이코닉 척테일러 올스타를 플랫폼 솔과 함께 만나보세요.",
                "features": "가볍고 견고한 캠퍼스 어퍼, 시즌리스, 타임리스한 실루엣, 기존 제품보다 높은 고무 플랫폼 미드솔",
                "feature_image": "https://image.converse.co.kr/cmsstatic/product/21552/560250C-2.jpg",
                "main_image": "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_pdp-primary.jpg?gallery="
            },
            {
                "sub_image": [
                    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_02.jpg?browse=",
                    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_03.jpg?browse=",
                    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_04.jpg?browse=",
                    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_05.jpg?browse=",
                    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_06.jpg?browse=",
                    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_07.jpg?browse="
                ],
                "color_list": [
                    {
                        "id": 1,
                        "main_image": "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_pdp-option.jpg?browse="
                    },
                    {
                        "id": 219,
                        "main_image": "https://image.converse.co.kr/cmsstatic/product/560251C_560251C_pdp-option.jpg?browse="
                    }
                ],
                "size_list": [220, 225, 230, 235, 240, 245, 250, 255, 260]
            }
        ]
    }

    return (
        <nav>
            <ul className="dep1 s1">
                { datas[0] }
                
                {datas.행사정보.map((_, i) => {
                    <li className='m1'>{i.name}</li>
                })
                }
            </ul>
        </nav>
    )
}