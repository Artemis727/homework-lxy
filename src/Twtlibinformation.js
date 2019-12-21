import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Twtlibinformation extends Component {
  constructor () {
    super();
}

    render()
    {
        return(
            <div id ="information-body">
                <div id = "list-header">
                    <span className = "list-logo"></span>
                    <span className = "list-login"></span>
                </div>

                <div className = "all-information">
                    <Link to="/TwtlibList">
                        <button className = "return"> ヽ(･ω･´ﾒ) 返回上一级</button>
                    </Link>
                    
                    <div className = "Basic-Information">
                        <span className = "basic-information">
                            <span className = "icon-basicinfo"></span>
                            <span className = "information-title1">
                                基本信息|BASIC INFORMATION
                            </span>
                        </span>
                        <span className = "collect"></span>
                        <div className = "information">
                            <span className = "cover"></span>
                            <span className = "describe">
                                <div class = "title">
                                    牛奶可乐经济学
                                    <span className = "mark"></span>
                                </div>
                                <span className = "information-name">
                                    <div>作者：</div>
                                    <div>出版社：</div>
                                    <div>出版时间：</div>
                                    <div>收录入馆：</div>
                                    <div>ISBN：</div>
                                    <div>价格：</div>
                                    <div>图书类型：</div>
                                    <div>出版地址：</div>
                                </span>
                                <span className = "information-contents">
                                </span>
                            </span>
                            <span className = "more"></span>
                        </div>
                    </div>

                    <div className = "LOCATION">
                        <span className = "location">
                            <span className  = "icon-location"></span>
                            <span className = "information-title2">
                                在馆信息|LOCATION
                            </span>
                            <table border="0" width="100%" >
                                <tr><b>
                                    <th>索书位</th>
                                    <th></th>
                                    <th></th>
                                    </b></tr>
                                <tr>
                                    <td>所在馆藏地点</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>在馆状态</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </span>
                    </div>

                    <div className = "CONTENTS"></div>
                </div>
            

            <div id = "list-footer">
                <div className = "para1">
                    加入我们 - 联系方式 - 天 外 天
                </div>
                <div className = "para2">
                    POWERED BY TWT STUDIO @ 2000-2020
                </div>
            </div>
        </div>
        )
    }
}

export default Twtlibinformation