import React, { Component } from 'react'

class TwtlibApp extends Component {
  constructor () {
    super();
}

    render()
    {
        return(
            <body>
                <div id = "header">
                    <span className = "logo"></span>
                    <span className = "login"></span>
                </div>

                <div className = "Twtlib-Research">
                    <span className = "Twtlib-Input">
                        <input className = "Research" placeholder = "请输入关键字检索"></input>
                    </span>
                    <span className = "Button-Research">
                        <button className = "research-button">检索</button>
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
            </body>
        )
    }
}

export default TwtlibApp