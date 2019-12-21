import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TwtlibList extends Component {
    constructor () {
        super();
}

    render()
    {
        return(
            <div id = "list-body">

                <div id = "list-header">
                    <span className = "list-logo"></span>
                    <span className = "list-login"></span>
                </div>

                <div className = "TwtlibList-Research">
                    <span className = "Twtlib-Input">
                        <input className = "List-Research" placeholder = "请输入关键字检索"></input>
                    </span>
                    <span className = "Button-Research">
                        <Link to="/TwtlibList">
                            <button className = "list-research-button" onclick = "">检索</button>
                        </Link>
                    </span>
                </div>

                <div className = "result">
                    <Link to="/TwtlibApp">
                        <button className = "return"> ヽ(･ω･´ﾒ) 返回上一级</button>
                    </Link>
                    <div className = "Research-result">
                        共检索到
                        <span class = "Research-number">3</span>
                        本书籍
                    </div>

                    <Link to = "/Twtlibinformation">
                        <div className = "book1">
                            <span className = "cover1"></span>
                            <span className = "information1">
                                <div className  = "title1">
                                    <span className = "name1"></span>
                                    <span calssName = "mark1"></span>
                                </div>
                                <div className = "detail1">
                                    <div className = "author1"></div>
                                    <div calssName = "publisher1"></div>
                                    <div className = "describe1">
                                        <span calssName = "date1"></span>
                                        <span className = "ISBN1"></span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </Link>

                    <Link to = "/Twtlibinformation">
                        <div className = "book2">
                            <span className = "cover2"></span>
                            <span className = "information2">
                                <div className  = "title2">
                                    <span className = "name2"></span>
                                    <span calssName = "mark2"></span>
                                </div>
                                <div className = "detail2">
                                    <div className = "author2"></div>
                                    <div calssName = "publisher2"></div>
                                    <div className = "describe2">
                                        <span calssName = "date2"></span>
                                        <span className = "ISBN2"></span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </Link>

                    <Link to = "/Twtlibinformation">
                        <div className = "book3">
                            <span className = "cover3"></span>
                            <span className = "information3">
                                <div className  = "title3">
                                    <span className = "name3"></span>
                                    <span calssName = "mark3"></span>
                                </div>
                                <div className = "detail3">
                                    <div className = "author3"></div>
                                    <div calssName = "publisher3"></div>
                                    <div className = "describe3">
                                        <span calssName = "date3"></span>
                                        <span className = "ISBN3"></span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </Link>
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

export default TwtlibList