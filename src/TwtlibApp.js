import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TwtlibApp extends Component {
  constructor () {
    super();
}

    render()
    {
        return(
            <div id = "body">
                <div id = "header">
                    <span className = "logo"></span>
                    <span className = "login"></span>
                </div>

                <div className = "Twtlib-Research">
                    <span className = "Twtlib-Input">
                        <input className = "Research" placeholder = "请输入关键字检索"></input>
                    </span>
                    <span className = "Button-Research">
                        <Link to="/TwtlibList">
                            <button className = "research-button" onclick = "">检索</button>
                        </Link>
                    </span>
                </div>

                <div id = "footer">
                    <div className = "para1">
                        加入我们 - 联系方式 - 意见反馈
                    </div>
                    <div className = "para2">
                        POWERED BY TWT STUDIO @ 2000-2020
                    </div>
                </div>
            </div>
        )
    }
}

export default TwtlibApp