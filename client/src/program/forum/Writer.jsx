import React from 'react'

import './css/content.css'

export default function Writer() {
    return (
        <form onSubmit={this}>
            <div className="participation_wp">
                <div className="tb-wp">
                    <table className="tb_write">
                        <colgroup className="tb_col">
                            <col width="20%"/>
                            <col width="80%"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>Participation</th>
                                <td>
                                    <div classname='checks'>
                                        <input type='radio' id='ex_rd1' value='ON' name='type' checked='checked'/>
                                        <label for='ex_rd1'>
                                            온라인참가
                                        </label>
                                    </div>
                                    <div classname='checks mar-left-30'>
                                        <input type='radio' id='ex_rd2' value='OFF' name='type' />
                                        <label for='ex_rd2'>
                                            현장참가
                                        </label>
                                    </div>
                                </td>
                                </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </form>
    )
}
