import { render } from "@testing-library/react";
import { useState } from "react";


export default function Nav() {
    const [datas, setDatas] = useState(
        [
            {
                id: 1,
                name: '행사개요',
                link: '',
                data: [{
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
            },
            {
                id: 2,
                name: '프로그램',
                link: '',
                data: [{
                    id: 1,
                    name: 'test1',
                    link: '',

                }, {
                    id: 2,
                    name: 'test2',
                    link: '',
                }]
            }
        ]
    );

    const menu = datas.map((param) => (
        <ul>{param.name}
            {param.data.map((param) => (
                <li>{param.name}</li>
            ))}
        </ul>
    ));

    return (
        <nav>
            <ul className="dep1 s1">
                {menu}
            </ul>
        </nav>
    )
}
